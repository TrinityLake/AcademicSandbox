// Secret Message Validation by Lisa F.

// Function to validate user input and diaply secret message
function validateInput(event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const zipCode = document.getElementById('zipCode').value.trim();

    // Combine first and last names
    const fullName = firstName + ' ' + lastName;

    // Check if full name length is less than or equal to 20 characters
    if (fullName.length > 20) {
        alert('Full name must be less than or equal to 20 characters.');
        return; // Exit function if validation fails
    }

    // Check if zip code is exactly 5 digits
    if (!(/^\d{5}$/.test(zipCode))) {
        alert('Zip code must contain exactly 5 digits.');
        return; // Exit function if validation fails
    }

    // If all validations pass, display secret message
    displaySecretMessage(fullName, zipCode);
}

// Function to display secret message
function displaySecretMessage(fullName, zipCode) {
    const messageDisplay = document.getElementById('messageDisplay');
    messageDisplay.innerHTML = `<p>Hello, ${fullName}!</p>
                                <p>Here's your secret message:</p>
                                <blockquote>
                                    "The greatest secrets are always hidden in the most unlikely places. those who don't believe in magic will never find it."
                                    <footer>- Roald Dahl</footer>
                                </blockquote>
                                <p>Your secret access code is: ${zipCode}</p>`;
}