// Get the element for dynamic typing effect
const textElement = document.querySelector("#intro");
// Get the text to be printed
const text = textElement.innerHTML.trim();
// Set the element's text to an empty string
textElement.innerHTML = "";

// Define a counter and a timer
let i = 0;
let timer = setInterval(() => {
  // Add each character of the text to the element one by one
  textElement.innerHTML += text.charAt(i);
  i++;
  // Clear the timer when all the text has been printed
  if (i > text.length) {
    clearInterval(timer);
  }
}, 1000);
