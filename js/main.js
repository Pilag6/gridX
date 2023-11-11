// Manipulation DOM

const text = document.getElementById("text");

text.addEventListener("click", () => {
    text.style.color = "red";
    console.log("Now the text is red");
});


// Intersection Observer API

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }

    });
});

const hiddenElements = document.querySelectorAll(".hidden");

hiddenElements.forEach((element) => observer.observe(element));

