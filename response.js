
document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const navLinks = document.getElementById("navLinks");

    menuIcon.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
});
