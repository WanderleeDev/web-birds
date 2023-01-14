const btnMenu = document.querySelector("#btnMenu");
const menu = document.querySelector("#menu");
const menuLink = document.querySelectorAll("#navbarLink")

btnMenu.addEventListener("click",function(){
  menu.classList.toggle("nav-container--wacth");
});

menuLink.forEach(link => {
  link.addEventListener("click", function(){
    menu.classList.remove("nav-container--wacth");
  });
});



