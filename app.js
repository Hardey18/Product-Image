const hamburger = document.querySelector(".hamburger");
const sideNav = document.querySelector(".side-nav");
hamburger.addEventListener("click", (e) => {
    hamburger.classList.toggle("hamburger-cancel");
    sideNav.classList.toggle("hidenav");
})