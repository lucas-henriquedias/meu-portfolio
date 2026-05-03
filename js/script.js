const btn = document.querySelector('.menu_toggle');
const menu = document.querySelector('.list_nav');

btn.addEventListener('click', () => {
    menu.classList.toggle('active');
});

/*========================================*/

const navbar = document.querySelector('.nav_bar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});