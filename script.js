"use strict";

//Title 🟧 Module 8 - Events: Lesson 09. Event Bubbling


//? 🧩 Bubbles Up

/*
//  Step 1

document.getElementById("child").addEventListener("click", function (e) {
    e.stopPropagation();
    console.log("Button clicked");
});

document.getElementById("parent").addEventListener("click", () => {
    console.log("Div clicked");
});
*/


/*
//  Step 2

const parent = document.getElementById("parent");

parent.addEventListener("click", function (e) {
    console.log(e.target);
});
*/

/*
//  Step 3

const parent = document.getElementById('parent');

parent.addEventListener("click", function (e) {
    if (e.target.id === "child") {
        console.log("Button clicked");
    } else {
        console.log("Div clicked");
    }
});
*/

//  Step 4

const parent = document.getElementById("parent");
const child = document.getElementById("child");

child.addEventListener("click", function () {
    console.log("Button clicked");
});

parent.addEventListener("click", function (e) {
    console.log("Div clicked");
    console.log("Target:", e.target);
});

