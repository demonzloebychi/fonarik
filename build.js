require('dotenv').config();

const fs = require('fs');
const path = require('path');
const nunjucks = require('nunjucks');

const rootDir = __dirname;
const viewsDir = path.join(rootDir, 'views');
const publicDir = path.join(rootDir, 'public');
const outDir = path.join(publicDir, 'static');
const cssDir = path.join(publicDir, 'css');

const fakeData = require('./fakeData');
const commonData = require('./commonData');

const env = nunjucks.configure(viewsDir, {
  autoescape: true,
  watch: false,
  noCache: true,
});

function getCssFiles() {
  try {
    return fs
      .readdirSync(cssDir)
      .filter((file) => path.extname(file) === '.css')
      .map((file) => {
        const filePath = path.join(cssDir, file);
        const stats = fs.statSync(filePath);

        return {
          name: file,
          version: stats.mtimeMs,
        };
      });
  } catch (err) {
    console.warn(`Не удалось прочитать public/css: ${err.message}`);
    return [];
  }
}

function ensureOutDir() {
  fs.mkdirSync(outDir, { recursive: true });

  for (const file of fs.readdirSync(outDir)) {
    if (path.extname(file) === '.html') {
      fs.unlinkSync(path.join(outDir, file));
    }
  }
}

function getViewFiles() {
  return fs
    .readdirSync(viewsDir)
    .filter((file) => path.extname(file) === '.html');
}

function getOutputName(viewFile) {
  if (viewFile === 'index.html') return 'index.html';
  if (viewFile === 'notFound.html') return '404.html';

  return viewFile;
}

function rewriteAssetPaths(html) {
  // HTML лежит в /public/static/, а css/js/img/fonts/libs лежат рядом выше: /public/*
  return html
    .replaceAll('href="/css/', 'href="../css/')
    .replaceAll('href="/fonts/', 'href="../fonts/')
    .replaceAll('href="/libs/', 'href="../libs/')
    .replaceAll('src="/js/', 'src="../js/')
    .replaceAll('src="/img/', 'src="../img/')
    .replaceAll('src="/libs/', 'src="../libs/')
    .replaceAll('url(/img/', 'url(../img/')
    .replaceAll('url("/img/', 'url("../img/')
    .replaceAll("url('/img/", "url('../img/");
}

function removeAssetVersions(html) {
  return html
    .replace(/(\.\.\/(?:css|js|img|fonts|libs)\/[^"'?#\s]+)\?v=[^"'\s]+/g, '$1')
    .replace(/(\/(?:css|js|img|fonts|libs)\/[^"'?#\s]+)\?v=[^"'\s]+/g, '$1');
}

function renderPage(viewFile, cssFiles) {
  const pageName = path.basename(viewFile, '.html');

  const html = env.render(viewFile, {
    ...(fakeData[pageName] || {}),
    commonData,
    cssFiles,
  });

  return removeAssetVersions(rewriteAssetPaths(html));
}

function build() {
  ensureOutDir();

  const cssFiles = getCssFiles();
  const viewFiles = getViewFiles();

  for (const viewFile of viewFiles) {
    const html = renderPage(viewFile, cssFiles);
    const outputName = getOutputName(viewFile);
    const outputPath = path.join(outDir, outputName);

    fs.writeFileSync(outputPath, html, 'utf8');
    console.log(`Built: public/static/${outputName}`);
  }

  console.log(`Done. Static HTML files are in: ${path.relative(rootDir, outDir)}`);
}

build();