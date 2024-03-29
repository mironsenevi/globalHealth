
// Function to show person details
function showDetails(event) {
    const person = event.currentTarget;
    const details = person.querySelector(".personDetails");
    details.style.display = "block";
}

// Function to hide person details
function hideDetails(event) {
    const person = event.currentTarget;
    const details = person.querySelector(".personDetails");
    details.style.display = "none";
}

// Get all person elements
const persons = document.querySelectorAll('.person');

// Add event listeners to each person element
persons.forEach(person => {
    person.addEventListener('mouseenter', showDetails);
    person.addEventListener('mouseleave', hideDetails);
});

