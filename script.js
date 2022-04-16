let size = screen.height;
//navbar berubah ketika scrolling
window.addEventListener('scroll', function(){
    let header = document.querySelector('nav');
    let windowPrecicion = window.scrollY > size-180;
    header.classList.toggle('scrolling-active', windowPrecicion);
  })

  console.log(10*size);