

const head = document.querySelector('header');
const noShow = document.querySelector('.arrow-box');
const skillText = document.querySelector('.skills-text');


window.addEventListener('scroll', function () {
    if (window.pageYOffset > 100) {
        head.classList += ' shrink';
        noShow.style.display = 'none';

    } 
});
 

window.addEventListener('scroll', function () {
    if (window.pageYOffset > 1000) {
        skillText.classList += ' skill-scroll'; 
    }
});
