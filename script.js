// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Toggle mobile menu (hamburger)
function toggleMenu() {
    const nav = document.querySelector(".mobile-nav .nav-links");
    const icon = document.getElementById("hamburger");

    nav.classList.toggle("active");
    icon.classList.toggle("active");
}

// Close mobile menu when clicking outside
document.addEventListener("click", function(event) {
    const nav = document.querySelector(".mobile-nav .nav-links");
    const icon = document.getElementById("hamburger");

    if (!nav.contains(event.target) && !icon.contains(event.target)) {
        nav.classList.remove("active");
        icon.classList.remove("active");
    }
});
