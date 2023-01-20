"use strict"

// Typed
const typed = new Typed("#input", {
    strings: ["E-commerce website", "Fashion store", "Grocery website", "Shopping website"],
    typeSpeed: 70,
    backSpeed: 60,
    loop: true
})

// Responsive menu
const menuIcon = document.getElementById("menu-icon")
const navBar = document.getElementById("navbar")

menuIcon.addEventListener("click", function() {
    navBar.classList.toggle("active")
    menuIcon.classList.toggle("bx-x")
})