const wordArray = ["yorkie", "pitbull", "lab", "pomeranian"];

let pickWord ="";
let win = 0;
let losses = 0;
let guesses = 10;

let characterArray = [];
let dashArray = [];
let incorrectGuesses =[];

const gameStart = () => {

    pickWord = wordArray[Math.floor(Math.random() * wordArray.length)];
    characterArray = pickWord.split("");

    dashArray = [];

    incorrectGuesses = [];

    characterArray.forEach(() => {
        dashArray.push("_")
    })

    console.log(dashArray);

    document.getElementById("losses").innerHTML = losses;

    document.getElementById("guesses-left").innerHTML = guesses;

    document.getElementById("game-div").innerHTML = dashArray.join(" ");
    
    document.getElementById("incorrect-guesses").innerHTML = incorrectGuesses.join(' ');

    document.getElementById("wins").innerHTML = win;
}

const checkLetter = (letter) => {
    var letterCorrect = false;

    characterArray.forEach((character, i) => {
        if(letter === character){
            dashArray[i] = character;
            letterCorrect = true;
        }
    })

    if (letterCorrect === false) {
        guesses--;
        incorrectGuesses.push(letter);
    }

    document.getElementById("incorrect-guesses").innerHTML = incorrectGuesses.join(" ");

    document.getElementById("game-div").innerHTML = dashArray.join(" ");

    document.getElementById("guesses-left").innerHTML = guesses;

}

const checkGame = () => {
    if (guesses === 0){
        gameStart();
        playCry();
        guesses = 10
        losses++
    } else if(characterArray.toString() === dashArray.toString()) {
        win++
        guesses = 10;
        playWoof();
        gameStart();
    }
}

const playWoof= () => {
    const grabSound = document.getElementById('myAudio');

    grabSound.play();
}

const playCry= () => {
    const grabSound = document.getElementById('myAudio2');

    grabSound.play();
}

gameStart();


document.onkeyup = function(event){
    let guess = event.key.toLowerCase();
    
    checkLetter(guess);

    checkGame();
    
}


