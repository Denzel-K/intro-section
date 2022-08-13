const dropdowns = document.querySelectorAll('.dropdown');
const arrow = document.querySelectorAll('.arrow');
const arrowchange = document.querySelectorAll('.arrow_pic')
const menu = document.querySelector('.give');
const nav = document.querySelector('.navigation');
const close = document.querySelector('.close');


for(i=0; i<dropdowns.length; i++) {
    dropdowns[i].addEventListener('click', clicked);
    function clicked() {
        this.classList.toggle('active');
    }
}

menu.addEventListener('click', display);
function display() {
    nav.classList.remove('navigation_display');
}

close.addEventListener('click', remove);
function remove() {
    nav.classList.add('navigation_display');
}




