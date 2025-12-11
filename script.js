// JavaScript Document

/*uit de powerpoint uit de les van js-3stap*/
var deP = document.querySelector("p");
deP.onclick = ietsDoen;
function ietsDoen() {
    deP.classList.toggle("anders");
}

/*https://codepen.io/joesayegh/pen/jOEVPKO voor het hamburger menu*/
const burger = document.getElementById("burger-menu");
const menu = document.getElementById("menu");

burger.onclick = function () {
    burger.classList.toggle("close");
    menu.classList.toggle("overlay");
};

