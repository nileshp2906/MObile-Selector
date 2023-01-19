var menu = document.querySelector(".hamburger");
var navBar = document.querySelector("nav");
menu.addEventListener("click",()=>{
    menu.classList.toggle("active");
    navBar.classList.toggle("active");
})