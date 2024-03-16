// Palindrome Checker Scrip - Lisa F.

// Function to check if a string is a palindrome
function isPalindrome(str) {
    // Convert the string to lowercase and remove spaces
    str = str.toLowerCase().replace(/ /g, '');
    // Check if the string is equal to its reverse
    return str === str.split('').reverse().join('');
}

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Get the user input value
    const userInput = document.getElementById('userInput').value.trim();

    // Check if the input is not empty
    if (userInput !== '') {
        //Check if the input is palindrome
        if (isPalindrome(userInput)) {
            document.getElementById('result').textContent = `Yes, '${userInput}' is a palindrome!`;
        } else {
            document.getElementById('result').textContent = `No, '${userInput}' is not a palindrome.`;
        }

        // Delay the prompt to check another word after 2.5 seconds
        setTimeout(() => {
            const continueCheck = confirm('Do you want to check another word?');
            if (continueCheck) {
                // Clear the input field
                document.getElementById('userInput').value = '';
            } else {
                alert('Exiting Palindrome Cheker. Goodbye!');
            }
        }, 2500); // 2.5 second delay
    } else {
        document.getElementById('result').textContent = 'Please enter a word.';
    }

    // Clear the input field
    document.getElementById('userInput').value = '';
}

    // Function to play the mystical sound when page loads
    document.addEventListener('DOMContentLoaded', function() {
        const playAudioButton = document.getElementById('playAudioButton');
        const mysticalSound = new Audio('mystical-sound.mp3');

        playAudioButton.addEventListener('click', function() {
            mysticalSound.play(); // Play the mystical sound when the button is clicked
        });
    });

