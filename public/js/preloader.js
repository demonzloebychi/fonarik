window.addEventListener('load', function() {
  const preloader = document.getElementById('site-preloader');
  if (preloader) {
    setTimeout(function(){
      preloader.classList.add('is-hidden');

    }, 500)
  }
});
