document.addEventListener("DOMContentLoaded", function() {
    // 選取所有第一層菜單的按鈕
    const firstLevelButtons = document.querySelectorAll(".mobile-mega-drop");
    const secondLevelButtons = document.querySelectorAll(".mobile-mega-link-title");

    // 顯示/隱藏第一層mega菜單
    firstLevelButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            event.preventDefault();
            const parentLi = button.parentElement;
            const megaMenu = parentLi.querySelector(".mobile-mega-menu");
            const caretIcon = button.querySelector("i");

            megaMenu.classList.toggle("active");
            caretIcon.classList.toggle("ph-caret-down");
            caretIcon.classList.toggle("ph-caret-up");
        });
    });

    // 顯示/隱藏第二層mega菜單
    secondLevelButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            event.preventDefault();
            const target = document.querySelector(button.dataset.target);
            const caretIcon = button.querySelector("i");

            target.classList.toggle("active");
            caretIcon.classList.toggle("ph-caret-down");
            caretIcon.classList.toggle("ph-caret-up");
        });
    });
});
