// Function to change the text content of a paragraph
function changeText() {
  document.getElementById("text-content").innerText = "The text has been changed dynamically!";
}

// Function to modify the CSS style of an element
function changeStyle() {
  document.getElementById("style-example").style.color = "red";
  document.getElementById("style-example").style.fontWeight = "bold";
}

// Function to add or remove an element from the DOM
function toggleElement() {
  const element = document.getElementById("extra-element");
  
  if (element.style.display === "none") {
    element.style.display = "block"; // Show the element
  } else {
    element.style.display = "none"; // Hide the element
  }
}
