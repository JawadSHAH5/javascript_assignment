



function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // Reverse the cleaned string
    const reversedStr = cleanedStr.split('').reverse().join('');

    // Check if the original and reversed strings are the same
    return cleanedStr === reversedStr;
}

// Example usage:
const userInput = prompt("Enter a string to check if it's a palindrome:");
if (userInput) {
    if (isPalindrome(userInput)) {
        alert(`${userInput} is a palindrome!`);
    } else {
        alert(`${userInput} is not a palindrome.`);
    }
} else {
    alert("Please enter a string.");
}
