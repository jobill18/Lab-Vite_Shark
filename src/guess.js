const alphabet = "abcdefghijklmnopqrstuvwxyz";

function setupGuesses(element, handleGuess) {
  //iterate each letter in the alphabet
  alphabet.split("").forEach((letter) => {
    //create buttons
    const btn = document.createElement("button");
    //set buttons to hold the letters of the alphabet
    btn.innerText = letter;
    //add ability to determine if a letter was chosen
    btn.addEventListener("click", (e) => handleGuess(e, letter));
    //add the chosen letter to an element
    element.append(btn);
  });
}

export default setupGuesses;
