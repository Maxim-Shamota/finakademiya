var s = skrollr.init();

const toggle = document.querySelector('.toggle');
const menu = document.querySelector('.menu');
const overlay = document.querySelector('.overlay');
const body = document.querySelector('body');
const checkLang = document.querySelector('.check');
const ruText = document.querySelectorAll('[data-lang="ru"]');
const engText = document.querySelectorAll('[data-lang="eng"]');

// menu
document.onclick = function (e) {
    if (e.target.id !== 'menu' && e.target.id !== 'toggle') {
        toggle.classList.remove('active');
        overlay.classList.remove('active');
        body.classList.remove('active');
    }
}
toggle.onclick = function () {
    toggle.classList.toggle('active');
    overlay.classList.toggle('active');
    body.classList.toggle('active');
}

// проверка localStorage
if (localStorage.checkLang) {
    checkLang.checked = true;
}

if (localStorage.getItem('checkLang')) {
    ruText.forEach(item => {
        item.style.display = 'none';
    })
    engText.forEach(item => {
        item.style.display = 'block';
    })
}

//toggle langueges
checkLang.addEventListener('change', () => {
    if (checkLang.checked) {
        localStorage.setItem('checkLang', true);

        ruText.forEach(item => {
            item.style.display = 'none';
        })
        engText.forEach(item => {
            item.style.display = 'block';
        })
    } else {
        localStorage.removeItem('checkLang');

        ruText.forEach(item => {
            item.style.display = 'block';
        })
        engText.forEach(item => {
            item.style.display = 'none';
        })
    }
})
