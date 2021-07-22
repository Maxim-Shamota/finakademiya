var s = skrollr.init();

// menu

const toggle = document.querySelector('.toggle');
const menu = document.querySelector('.menu');
const overlay = document.querySelector('.overlay');
const body = document.querySelector('body');

document.onclick = function (e) {
    if (e.target.id !== 'menu' && e.target.id !== 'toggle') {
        toggle.classList.remove('active');
        // menu.classList.remove('active');
        overlay.classList.remove('active');
        body.classList.remove('active');
    }
}
toggle.onclick = function () {
    toggle.classList.toggle('active');
    // menu.classList.toggle('active');
    overlay.classList.toggle('active');
    body.classList.toggle('active');
}
