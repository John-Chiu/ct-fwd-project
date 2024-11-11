// For the counting function for single product and single temp

const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const num = document.querySelector('.Cake_number');

let a = 1;

plus.addEventListener("click", () => {
    a++;
    a = (a < 10) ? "0" + a : a;
    num.innerText = a;
});

minus.addEventListener("click", () => {
    if (a > 1) {
        a--;
        a = (a < 10) ? "0" + a : a;
        num.innerText = a;
    }
});



// Filter function

// Function to handle button group activation
function setupButtonGroups() {
    // Select all button groups
    const buttonGroups = document.querySelectorAll('.button-group');

    buttonGroups.forEach(group => {
        group.addEventListener('click', function(e) {
            if (e.target.classList.contains('filterBTN')) {
                // Remove 'active' class from all buttons in the group
                const buttons = this.querySelectorAll('.filterBTN');
                buttons.forEach(button => {
                    button.classList.remove('active');
                });
                
                // Add 'active' class to the clicked button
                e.target.classList.add('active');
                
                // Optionally log the active button's value
                // const activeValue = e.target.getAttribute('data-value');
                // console.log(`Active Button Value: ${activeValue}`);
            }
        });
    });
}

// Initialize functionalities on page load
document.addEventListener('DOMContentLoaded', function() {
    setupButtonGroups();
});
