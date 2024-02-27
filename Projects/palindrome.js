// JavaScript file for Palindrome Checker Project

// Function to check if a string is a palindrome
function isPalindrom(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    str=str.replace(/[^A-Za-zO-9]/g, '').toLowerCase();
    // Reverse the string
    const reversedStr = str.split('').reverse().join('');
    // Check if the original and reversed strings are equal
    return str === reversedStr;
}

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault();
    // Get user input value
    const userInput = document.getElementById('userInput').value;
    // Check if the input is a palindrome
    const isPalindromic = isPalindrome(userInput);
    // Display results to the user 
    const resultElement = document.getElementById('result');
    if (isPalindromic) {
        resultElement.textContent = `"${userInput}" is a palindrome!`;
    } else {
        resultElement.textContent = `"${userInput}" is not a palindrome.`;
    }
    // Clear input field
    document.getElementById('userInput').value = '';
}

// Add event listener to form submission 
document.getElementById('palindromeForm').addEventListener('submit'), handleFormSubmit;
