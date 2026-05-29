const menuToggle = document.getElementById("menu-toggle");
const siteNav = document.getElementById("site-nav");
if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", function () {
    const isOpen = siteNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", isOpen.toString());
  });

  const navLinks = siteNav.querySelectorAll("a");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      siteNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}