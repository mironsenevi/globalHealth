// Array of questions
const questions = [
    "What is your name?",
    "What is your surname?",
    "What is your age?",
    "What is your gender?",
    "Do you agree with privacy terms?",

    "What brings you to this cource?",
    "How do you like to volunteer(physicle or online)",
    "What task do you like to do?",
    "Which area do you live?",

    "Area of study",
    "Highest degree that you have",
    "what university?",
    "Completion year",
    "country",

    "What is the minimum hour you can volunteer?",
    "Mobile phone number",
    "Email"


];

// array to store user input
let userData = [];

let currentQuestionIndex = 0;
let first = 1;
let second = 1;
let third = 1;
let fourth = 1;
function displayStep(){
    const stepIndicator = document.getElementById("stepIndicator");
    if(currentQuestionIndex < 5){
        stepIndicator.innerHTML = `<p>STEP 1 Personal details | Question ${first}/5</p>`;
        first++;
    }else if(currentQuestionIndex < 9){
        stepIndicator.innerHTML = `<p>STEP 2 volunteering tasks | Question ${second}/4</p>`;
        second++;
    }else if(currentQuestionIndex < 14){
        stepIndicator.innerHTML = `<p>STEP 3 Qualifications | Question ${third}/5</p>`;
        third++;
    }else{
        stepIndicator.innerHTML = `<p>STEP 4 Availability and contact | Question ${fourth}/3`;
        fourth++;
    }
}
// Function to display current question
function displayCurrentQuestion() {

    const questionContainer = document.getElementById("questionContainer");
    questionContainer.innerHTML = `<p>${questions[currentQuestionIndex]}</p>`;
}

function displayUserDetails() {
    const userDetailsDiv = document.querySelector(".userDetails");
    userDetailsDiv.innerHTML = ""; // Clear previous content

    // Define category boundaries
    const categoryBoundaries = [5, 9, 14, questions.length];

    let answeredQuestions = 0;
    let totalQuestions = 0;

    // Iterate over userData array and display each piece of data
    userData.forEach((data, index) => {
        const detailElement = document.createElement("p");
        detailElement.textContent = `${questions[index]}: ${data}`;
        userDetailsDiv.appendChild(detailElement);

        // Check if the current index is at a category boundary
        if (categoryBoundaries.includes(index + 1)) {
            // Add a green line after the category
            const greenLine = document.createElement("hr");
            greenLine.classList.add("categoryLine");
            userDetailsDiv.appendChild(greenLine);
        }
    });
}


// Function to handle "Next" button click
function onNextClick() {
    const userInput = document.getElementById("userInput");

    // Store user input
    userData[currentQuestionIndex] = userInput.value;

    userInput.value = "";

    // Proceed to the next question or finish if all questions are answered
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        displayCurrentQuestion();
        displayStep();
        if(currentQuestionIndex == questions.length-1){
            document.getElementById("nextButton").value = "submit";
        }
    } else {
        document.querySelector(".userDetails").style.display = "block";
        displayUserDetails();
        alert("Thank you for providing your information!");
        console.log(userData); // Output user data to console
    }
}

// Function to handle "Skip" button click
function onSkipClick() {
    // Proceed to the next question or finish if all questions are answered
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        displayCurrentQuestion();
        displayStep();
        if(currentQuestionIndex == questions.length-1){
            document.getElementById("nextButton").value = "submit";
        }
    } else {
        document.querySelector(".userDetails").style.display = "block";
        displayUserDetails();
        alert("Thank you for providing your information!");
        console.log(userData); // Output user data to console
    }
}

// Function to handle the start button click
function onStartClick() {
    // Hide the start button and h1 tag
    document.querySelector(".startButtonContainer").style.display = "none";
    
    
    // Display the questionnaire section
    document.querySelector(".mainContainer").style.display = "block";
    
    // Display the first question
    displayCurrentQuestion();
    displayStep();
}

//event listeners for start button
document.getElementById("startButton").addEventListener("click", onStartClick);

// Event listeners for "Next" and "Skip" buttons
document.getElementById("nextButton").addEventListener("click", onNextClick);
document.getElementById("skipButton").addEventListener("click", onSkipClick);

// Display the first question when the page loads
displayCurrentQuestion();
displayStep();
