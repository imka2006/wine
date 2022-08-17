const body = document.querySelector("body");
const burger = document.querySelector(".burger");
const burgerMenu = document.querySelector(".burger__menu");
const plovMenu = document.querySelector(".plov__menu");

burgerMenu.addEventListener("click", () => {
    burger.classList.toggle("active");
    if (burger.classList.contains("active")) {
        body.style.overflow = "hidden";
        plovMenu.style.zIndex = "0"
    } else {
        body.style.overflow = "unset";
        plovMenu.style.zIndex = "11"
    }
});
const pagesList = document.querySelector(".pages__list");
const pagesMath = [
    "Home",
    "Vintage",
    "Imperial",
    "Sparkling",
    "Accessories",
    "Blog",
    "Product Details",
    "Contact",
];

for (let i = 0; i < pagesMath.length; i++) {
    pagesList.innerHTML += `<li class="pages__item">${pagesMath[i]}</li>`;
}

const pagesItem = document.querySelectorAll(".pages__item");
pagesItem[0].classList.add("pages__hover");
pagesItem.forEach((item) => {
    item.addEventListener("click", () => {
        pagesItem.forEach((itemTwo) => {
            itemTwo.classList.remove("pages__hover");
        });
        item.classList.add("pages__hover");
    });
});
const plov = document.querySelector(".plov");

plovMenu.addEventListener("click", () => {
    plov.classList.toggle("active");
    if (plov.classList.contains("active")) {
        body.style.overflow = "hidden";
        burgerMenu.style.zIndex = "0"
    } else {
        body.style.overflow = "unset";
        burgerMenu.style.zIndex = "11"
    }
});
const plovList = document.querySelector(".plov__nav");

for (let i = 0; i < pagesMath.length; i++) {
    plovList.innerHTML += `<li class="plov__item">${pagesMath[i]}</li>`;
}

const plovItem = document.querySelectorAll(".plov__item");
plovItem[0].classList.add("pages__hover");
plovItem.forEach((item) => {
    item.addEventListener("click", () => {
        plovItem.forEach((itemTwo) => {
            itemTwo.classList.remove("pages__hover");
        });
        item.classList.add("pages__hover");
    });
});