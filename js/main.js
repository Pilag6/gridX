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
const show = document.querySelector(".show")

bar.addEventListener("click", () => {
    navMenu.classList.toggle("header-nav")
    show.classList.toggle("showItem")
})