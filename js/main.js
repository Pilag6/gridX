//  AOS

AOS.init({
    delay: 500,
    duration: 1500,
    easing: "ease-in-out",
    once: false,
});

// TOGGLE MENU

const bar = document.querySelector(".menu-bar")
const navMenu = document.querySelector(".nav-menu-items")
const showMenu = document.querySelector(".nav-menu")

bar.addEventListener("click", () => {
    navMenu.classList.toggle("header-nav")
    showMenu.classList.toggle("showItem")
})