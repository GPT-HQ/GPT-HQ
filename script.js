// Vuosi footerissa
document.getElementById('year').textContent = new Date().getFullYear();

// Hampurilainen: lisää/poista .open mobile-naville
function toggleMenu() {
    const mobileNav = document.querySelector(".mobile-nav");
    mobileNav.classList.toggle("open");
}
