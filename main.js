"use strict";

const menuList = document.querySelector(".js_menu");
const menuIcon = document.querySelector(".js_menuicon");

//AP DogsI:

const getFromAPIDogs = fetch("https://api.thedogapi.com/v1/breeds")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });

//MENU:

//muestra el menu:
function showMenu() {
  menuList.classList.remove("hidden");
  console.log("muestro el menu");
}

//oculta el menu:
function hiddenMenu() {
  menuList.classList.add("hidden");
  console.log("oculto el menu");
}

//muestra o oculta el menu:
function menuDown() {
  if (menuList.classList.contains("hidden")) {
    showMenu();
  } else {
    hiddenMenu();
  }
}

// evento click:
function handleClickMenu(event) {
  event.preventDefault();
  menuDown();
}

//evento menu:
menuIcon.addEventListener("click", handleClickMenu);


//MAP:
