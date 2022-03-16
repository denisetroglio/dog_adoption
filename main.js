"use strict";



//AP DogsI:

const getFromAPIDogs = fetch("https://api.thedogapi.com/v1/breeds")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
