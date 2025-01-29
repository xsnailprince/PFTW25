const gameOne = {
    title: "League of Legends",
    type: "MOBA",
    numberOfPlayers: "1-5",
    rating: "T",
    shortDescription: "Two teams of five players battle in player-versus-player combat, each team occupying and defending their half of the map. Each of the ten players controls a character, known as a 'champion', with unique abilities and differing styles of play."
};

const gameTwo = {
    title: "Persona 3 Portable",
    type: "RPG",
    numberOfPlayers: "1",
    rating: "M",
    shortDescription: "In Persona 3, the player assumes the role of a high school student who joins the 'Specialized Extracurricular Execution Squad' (SEES), a group of students investigating a temporal anomaly known as the 'Dark Hour', during which its members can enter Tartarus, a tower containing monsters called Shadows. They battle the Shadows using a physical manifestation of their psyche called a Persona, which they summon by firing a gun-like object called an 'Evoker' at their head."
};

const gameThree = {
    title: "Fire Emblem: Awakening",
    type: "RPG",
    numberOfPlayers: "1-2",
    rating: "T",
    shortDescription: "Fire Emblem Awakening is a tactical role-playing game. The gameplay focuses on the tactical movement of characters across a grid-based battlefield and fighting enemy units. Other features include the ability to build and foster relationships between characters to improve their abilities and multiple camera perspectives in battle."
};

const gameArray = [gameOne, gameTwo, gameThree];

var promptResponse = window.prompt("I have 3 games in my collection. Pick a number between 1 and 3 and I'll tell you about that game.");
var gameString = JSON.stringify(gameArray[promptResponse-1]);
window.alert(gameString);



