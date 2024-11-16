document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".nav-item").forEach((item) => {
    const megaMenu = item.querySelector(".mega-menu");

    if (megaMenu) {
      item.addEventListener("mouseenter", () => {
        megaMenu.style.visibility = "visible";
        megaMenu.style.opacity = "1";
        megaMenu.style.transform = "translateY(0)";
      });

      item.addEventListener("mouseleave", () => {
        megaMenu.style.visibility = "hidden";
        megaMenu.style.opacity = "0";
        megaMenu.style.transform = "translateY(10px)";
      });
    }
  });
});
