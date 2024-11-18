document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".nav-item").forEach((item) => {
    const megaMenu = item.querySelector(".mega-menu");

    if (megaMenu) {
      megaMenu.style.visibility = "hidden"; 
      item.addEventListener("mouseenter", () => {
        megaMenu.style.visibility = "visible";
        megaMenu.style.opacity = "1";
        megaMenu.style.transform = "translateY(0)";
      });

      item.addEventListener("mouseleave", () => {
        megaMenu.style.opacity = "0";
        megaMenu.style.transform = "translateY(10px)";

        setTimeout(() => {
          megaMenu.style.visibility = "hidden"; 
        }, 500); 
      });
    }
  });
});
