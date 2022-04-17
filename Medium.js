let userInput = prompt("Are you screaming, whispering, or neither?");

if (userInput === userInput.toUpperCase()) {
    console.log("You're screaming")
    alert()
} else if (userInput === userInput.toLowerCase()) {
    console.log("You're whispering")
    alert()
} else {
    console.log("You're doing neither")
}
