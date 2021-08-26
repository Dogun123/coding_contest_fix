'use strict';

const linkItems = document.querySelectorAll(".nav__text");
const dropdownMenus = document.querySelectorAll(".dropdown_menu");
const lines = document.querySelectorAll(".line")


linkItems[0].addEventListener('click',()=>{
    dropdownMenus[0].classList.toggle('open');
    lines[0].classList.toggle('open');   
    if(dropdownMenus[1].className === "dropdown_menu open"){
        dropdownMenus[1].classList.remove('open');
    } else if(dropdownMenus[2].className === "dropdown_menu open"){
        dropdownMenus[2].classList.remove('open');
    }

    if(lines[1].className === "line open"){
        lines[1].classList.remove('open');
    } else if(lines[2].className === "line open"){
        lines[2].classList.remove('open');
    }
});

linkItems[1].addEventListener('click',()=>{
    dropdownMenus[1].classList.toggle('open');
    lines[1].classList.toggle('open');
    if(dropdownMenus[0].className === "dropdown_menu open"){
        dropdownMenus[0].classList.remove('open');
    } else if(dropdownMenus[2].className === "dropdown_menu open"){
        dropdownMenus[2].classList.remove('open');
    }
    if(lines[0].className === "line open"){
        lines[0].classList.remove('open');
    } else if(lines[2].className === "line open"){
        lines[2].classList.remove('open');
    }
});

linkItems[2].addEventListener('click',()=>{
    dropdownMenus[2].classList.toggle('open');
    lines[2].classList.toggle('open');
    if(dropdownMenus[1].className === "dropdown_menu open"){
        dropdownMenus[1].classList.remove('open');
    } else if(dropdownMenus[0].className === "dropdown_menu open"){
        dropdownMenus[0].classList.remove('open');
    }
    if(lines[0].className === "line open"){
        lines[0].classList.remove('open');
    } else if(lines[1].className === "line open"){
        lines[1].classList.remove('open');
    }
});






