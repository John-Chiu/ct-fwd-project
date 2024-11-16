const navBtn = document.getElementById("nav-mobile-toggle");
const navLinks = document.getElementById("mobile-nav-list");

navBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Close the mobile menu if the screen width is 768px or wider
const handleResize = () => {
    if (window.innerWidth >= 768) {
        navLinks.classList.remove("active"); // Close the menu
    }
};

// Listen for resize events
window.addEventListener("resize", handleResize);

// add date
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();
