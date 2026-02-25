document.getElementById('year').textContent = new Date().getFullYear();
function toggleMenu() {
    const menu = document.getElementById("sideMenu");
    const icon = document.getElementById("hamburger");

    menu.classList.toggle("active");
    icon.classList.toggle("active");
}

function closeMenu() {
    document.getElementById("sideMenu").classList.remove("active");
    document.getElementById("hamburger").classList.remove("active");
}

/* Close menu when clicking outside */
document.addEventListener("click", function(event) {
    const menu = document.getElementById("sideMenu");
    const icon = document.getElementById("hamburger");

    if (!menu.contains(event.target) && !icon.contains(event.target)) {
        closeMenu();
    }
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

