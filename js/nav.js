const toggle = document.getElementById('toggle');
const navbar = document.getElementById('navbar');
const contact = document.getElementById('contact');
const formopen = document.getElementById('contact-btn');
const formclose = document.getElementById('linkClose');

document.onclick = function(e){
    if(e.target.id !== 'sidebar' && e.target.id !== 'toggle')
    {
        navbar.classList.remove('active');
        toggle.classList.remove('active');
    }
}   



toggle.onclick = function(){
    navbar.classList.toggle('active');
    toggle.classList.toggle('active');
}



let subMenu = document.getElementById("subMenu");

function toggleMenu(){
    subMenu.classList.toggle("open-menu");
}
