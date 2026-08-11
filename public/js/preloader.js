window.addEventListener('load', function() {
  const loader = document.getElementById('loader-wrapper');
  
  if (loader) {
    setTimeout(function() {
      loader.classList.add('loader-hidden'); 
    }, 500); 
  }
});
