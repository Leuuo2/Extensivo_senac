const menu = document.querySelector('#Mobile_menu')
const menulink = document.querySelector('.nav_menu')
menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menulink.classList.toggle('active');
});
var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    }, 
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  }); 
