

/*  Header shrink on scroll  */
const head = document.querySelector('header');
const noShow = document.querySelector('.arrow-box');
const skillText = document.querySelector('.skills-text');


window.addEventListener('scroll', function () {
    if (window.pageYOffset > 100) {
        head.classList += ' shrink';
        noShow.style.display = 'none';

    } 
});



 
/*  Skill-text slide in  */
const controller = new ScrollMagic.Controller();
const scene = new ScrollMagic.Scene({
    triggerElement: '.skill-1',
    triggerHook: 0.9,
})
.setClassToggle('.skill-1', 'show')
.addTo(controller);



const scene2 = new ScrollMagic.Scene({
    triggerElement: '.skill-2',
    triggerHook: 0.8,
})
.setClassToggle('.skill-2', 'show')
.addTo(controller);


const scene3 = new ScrollMagic.Scene({
    triggerElement: '.skill-3',
    triggerHook: 0.8,
})
.setClassToggle('.skill-3', 'show')
.addTo(controller);