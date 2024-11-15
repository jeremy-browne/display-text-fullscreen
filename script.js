function displayFullscreen() {
    const textInput = document.getElementById("text-input").value;
    const displayText = document.getElementById("display-text");
    const fullscreenDisplay = document.getElementById("fullscreen-display");

    // Store the text in localStorage
    localStorage.setItem("savedText", textInput);

    // Set the text content for display
    displayText.textContent = textInput;

    // Adjust font size based on text length
    const length = textInput.length;
    if (length > 150) {
        displayText.style.fontSize = "3vw"; // Smaller font for longer text
    } else if (length > 100) {
        displayText.style.fontSize = "5vw";
    } else if (length > 50) {
        displayText.style.fontSize = "7vw";
    } else {
        displayText.style.fontSize = "10vw"; // Larger font for shorter text
    }

    fullscreenDisplay.style.display = "flex";

    fullscreenDisplay.onclick = function () {
        exitFullscreen(); // Go back to input mode without reloading
    };
}

function exitFullscreen() {
    const fullscreenDisplay = document.getElementById("fullscreen-display");
    fullscreenDisplay.style.display = "none";
}

function updateCharacterCount() {
    const textInput = document.getElementById("text-input");
    const charCount = document.getElementById("char-count");
    const maxLength = textInput.getAttribute("maxlength");
    const remaining = maxLength - textInput.value.length;
    charCount.textContent = `${remaining} characters remaining`;
}

function loadSavedText() {
    const savedText = localStorage.getItem("savedText");
    if (savedText) {
        document.getElementById("text-input").value = savedText;
        updateCharacterCount(); // Update character count display
    }
}
