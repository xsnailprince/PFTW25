const movieArray = [
    "Spirited Away ",
    "Nosferatu (2024) ",
    "Marie Antoinette (2006) "
];

window.alert("Here are some of my favorite movies! " + movieArray.toString());

var userInput = window.prompt("What is your favorite movie?");
movieArray.push(userInput);
window.alert("Here is a list of our favorite movies: " + movieArray.toString());

