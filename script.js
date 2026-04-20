"use strict";

function toggleTheme() {
  document.body.classList.toggle("dark-mode");
}

function hiName() {
    var name = prompt("What is your name?");
    if (name) {
        alert("Hi " + name + "!");
    } else {
        alert("Hi there!");
    }
}