document.addEventListener("DOMContentLoaded",function() {

const questions = document.querySelectorAll(".faqs-question");
// const answers = document.querySelectorAll(".faqs-answer");

questions.forEach(question => {
    question.addEventListener("click", () => {
        const answer = question.nextElementSibling;
        const icon = question.querySelector("i");

        answer.classList.toggle("active");

        icon.classList.toggle("fa-plus");
        icon.classList.toggle("fa-minus");
    });
});
});