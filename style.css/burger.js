let burger = document.querySelector('#burger');
let menu = document.querySelector('#menu');
let fermer = document.querySelector('#fermer');

burger.addEventListener('click',function(){

menu.classList.add('deploye','transition');

});

fermer.addEventListener('click',function(){

    menu.classList.remove('deploye')

});

// redimensionnement de fenêtre
window.addEventListener('resize',function(){

    console.log(window.innerWidth);
    if (this.window.innerWidth >= 768) {
        menu.classList.remove('deployer','transition');
    }

});