//  AOS

AOS.init({
    delay: 500,
    duration: 1500,
    easing: "ease-in-out",
    once: false,
});

// Manipulation DOM

const text = document.getElementById("text");

text.addEventListener("click", () => {
    text.style.color = "red";
    console.log("Now the text is red");
});

// Intersection Observer API

// const observer = new IntersectionObserver((items) => {
//     items.forEach((item) => {
//         if (item.isIntersecting) {
//             item.target.classList.add("to");
//         } else {
//             item.target.classList.remove("to");
//         }
//     });
// });

// const hiddenElements = document.querySelectorAll(".from");

// hiddenElements.forEach((element) => observer.observe(element));

// const footer = document.querySelector(".footer")
// const btn = document.querySelector("#btn");
// const anchor = document.querySelectorAll(".anchor")

// btn.addEventListener("click", () => {
//     footer.classList.toggle("light");
    
//     anchor.forEach((item) => {
//         item.classList.toggle("anchorDark")
//     })

// });

// btn.addEventListener("click", redBg)
// btn.addEventListener("mouseover", changeBorder)

// function redBg () {
//     footer.classList.toggle("red");
// }

// function changeBorder () {
//     footer.style.border = "1px solid red"
// }

const bar = document.querySelector(".menu-bar")
const navMenu = document.querySelector(".nav-menu-items")
const show = document.querySelector(".show")

bar.addEventListener("click", () => {
    navMenu.classList.toggle("header-nav")
    show.classList.toggle("showItem")
})