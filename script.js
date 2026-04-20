"use strict";

function toggleTheme() {
  document.body.classList.toggle("dark-mode");
}

function hiName() {
    let name = prompt("What is your name?");
    if (name) {
        alert("Hi " + name + "!");
    } else {
        alert("Hi there!");
    }
}

function confirmFunc() {
    let response = confirm("Are you old enought to buy alcohol?");
    if (response) {
        alert("You can buy alcohol!");
    } else {
        alert("You cannot buy alcohol!");
    }
}