"use strict";

const titlePage = document.querySelector(".js_title");

titlePage.innerHTML = "Adopt a pretty dog and be happy toghether!";


//AP DogsI:

const getFromAPIDogs = fetch("../dataDogs/APIdogs.json")
.then(response => response.json())
.then(data => {
    console.log(data);
});
