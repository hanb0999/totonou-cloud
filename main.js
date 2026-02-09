const menuToggle = document.getElementById('menu-toggle');
const fullscreenMenu = document.getElementById('fullscreen-menu');
const closeMenu = document.getElementById('close-menu');
const heroSection = document.querySelector('.hero-section');

window.addEventListener('scroll', () => {
    const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
    
    if (window.innerWidth <= 768) {
        menuToggle.classList.add('visible');
    } else {
        if (window.scrollY > heroBottom - 100) {
            menuToggle.classList.add('visible');
        } else {
            menuToggle.classList.remove('visible');
            fullscreenMenu.classList.remove('open'); 
        }
    }
});

window.addEventListener('load', () => {
    if (window.innerWidth <= 768) {
        menuToggle.classList.add('visible');
    }
});

menuToggle.addEventListener('click', () => {
    fullscreenMenu.classList.add('open');
    menuToggle.classList.add('no-show'); 
});

closeMenu.addEventListener('click', () => {
    fullscreenMenu.classList.remove('open');
    menuToggle.classList.remove('no-show');
});

document.querySelectorAll('.overlay-nav a').forEach(link => {
    link.addEventListener('click', () => {
        fullscreenMenu.classList.remove('open');
        menuToggle.classList.remove('no-show'); 
    });
});

function toggleSlide() {
    const problem = document.getElementById('problem-slide');
    const solution = document.getElementById('solution-slide');
    const rightArrow = document.querySelector('.right-arrow');
    const headerEn = document.getElementById('header-en');
    const headerJp = document.getElementById('header-jp');
    const footerText = document.getElementById('bottom-text');

    if (problem.classList.contains('active')) {
        problem.classList.remove('active');
        solution.classList.add('active');
        headerEn.innerText = "SOLUTION";
        headerJp.innerText = "解決策";
        footerText.innerText = "ワンクリックで、すべて整う！";
        rightArrow.classList.remove('hint-pulse');
    } else {
        solution.classList.remove('active');
        problem.classList.add('active');
        headerEn.innerText = "PROBLEM";
        headerJp.innerText = "課題";
        footerText.innerText = "大人になった瞬間、管理するものが一気に増えていませんか？";
    }
}

window.addEventListener('keydown', function(e) {
    const problem = document.getElementById('problem-slide');
    const solution = document.getElementById('solution-slide');

    if (e.key === "ArrowRight" && problem.classList.contains('active')) {
        toggleSlide();
    } else if (e.key === "ArrowLeft" && solution.classList.contains('active')) {
        toggleSlide();
    }
});
