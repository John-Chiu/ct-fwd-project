document.addEventListener("DOMContentLoaded",function() {

const questions = document.querySelectorAll(".faqs-question");
// const answers = document.querySelectorAll(".faqs-answer");

questions.forEach(question => {
    question.addEventListener("click", () => {
        const answer = question.nextElementSibling;
        const icon = question.querySelector("i");

        answer.classList.toggle("active");

        if (icon.classList.contains("fa-plus")) {
            icon.classList.remove("fa-plus");
            icon.classList.add("fa-minus");
        }
        else { 
        icon.classList.remove("fa-minus");
        icon.classList.add("fa-plus");
        }
    });
});
});