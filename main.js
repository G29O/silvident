// ============================================================
//   SILVIDENT — main.js
//   Two things happen here:
//   1. Language switcher (RO / RU)
//   2. Mobile hamburger menu (open / close)
// ============================================================


// ===========================
// 1. LANGUAGE SWITCHER
// ===========================

function setLanguage(lang) {

    // Find every element with class "lang-text"
    // and swap its content to the right language
    document.querySelectorAll('.lang-text').forEach(function(el) {
        const translation = el.getAttribute('data-' + lang);
        if (translation) {
            el.innerHTML = translation;
        }
    });

    // Make the active button white, the inactive one faded
    document.getElementById('btn-ro').classList.toggle('active', lang === 'ro');
    document.getElementById('btn-ru').classList.toggle('active', lang === 'ru');

    // Update the page language tag (good for browsers and search engines)
    document.documentElement.lang = lang;
}


// ===========================
// 2. MOBILE HAMBURGER MENU
// ===========================

function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    const btn  = document.querySelector('.hamburger');

    // Toggle means: if it's open, close it — if it's closed, open it
    menu.classList.toggle('open');
    btn.classList.toggle('open');
}

function closeMenu() {
    const menu = document.getElementById('mobile-menu');
    const btn  = document.querySelector('.hamburger');

    // Always close — called when a menu link is clicked
    menu.classList.remove('open');
    btn.classList.remove('open');
}
