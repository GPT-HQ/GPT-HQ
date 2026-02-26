// Vuosi footerissa
document.getElementById('year').textContent = new Date().getFullYear();

// Hampurilainen: lisää/poista .open mobile-naville
function toggleMenu() {
    const mobileNav = document.querySelector(".mobile-nav");
    mobileNav.classList.toggle("open");
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

