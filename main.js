

const lead = document.querySelector('header');
const noShow = document.querySelector('.arrow-box');
let position = 0;

window.addEventListener('scroll', function () {
    if (window.pageYOffset > 100) {
        lead.classList += ' shrink';
        noShow.style.display = 'none';

    } 
});
 

