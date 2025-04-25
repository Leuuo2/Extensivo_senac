const menu = document.querySelector('#Mobile_menu')
const menulink = document.querySelector('.nav_menu')
menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menulink.classList.toggle('active');
});