//Palindrome Checker Scrip - Lisa F.

//Function to check if a string is a palindrome
function isPlaindrome(str) {
    // Convert the string to lowercase and remove spaces
    str = str.toLowerCase().replace(/ /g, '');
    // Check if the string is equal to its reverse
    return str === str.split('').reverse().join('');
}
