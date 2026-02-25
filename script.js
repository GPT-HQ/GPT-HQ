// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Toggle menu open/close
function toggleMenu() {
    const menu = document.getElementById("sideMenu");
    const icon = document.getElementById("hamburger");

    menu.classList.toggle("active");
    icon.classList.toggle("active");
}

// Close menu
function closeMenu() {
    document.getElementById("sideMenu").classList.remove("active");
    document.getElementById("hamburger").classList.remove("active");
}

// Close menu when clicking outside
document.addEventListener("click", function(event) {
    const menu = document.getElementById("sideMenu");
    const icon = document.getElementById("hamburger");

    // If click is outside menu AND outside hamburger icon → close
    if (!menu.contains(event.target) && !icon.contains(event.target)) {
        closeMenu();
    }
});

// AUTO‑ACTIVE NAVIGATION LINK
document.addEventListener("DOMContentLoaded", () => {
    const currentPage = window.location.pathname.split("/").pop();
    const links = document.querySelectorAll(".side-menu a");

    links.forEach(link => {
        const linkPage = link.getAttribute("href");
        if (linkPage === currentPage) {
            link.classList.add("active");
        }
    });
});
