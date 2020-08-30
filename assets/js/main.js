const hamburgerHandler = function() {
    const hamburgetBtn = document.querySelector(".hamburger");
    const nav = document.querySelector("nav");
    hamburgetBtn.addEventListener("click", function() {
        hamburgetBtn.classList.toggle("active");
        nav.classList.toggle("active");
    });
};

const main = function() {
    hamburgerHandler();
};

main();