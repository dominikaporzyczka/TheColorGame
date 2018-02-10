var squares;
var content = document.querySelector("#content");
var header = document.querySelector("#header");
var headerColorValue = document.querySelector("#colorValue");
var squareColors = [];
var easyGame = document.querySelector("#easy");
var hardGame = document.querySelector("#hard");
var newColors = document.querySelector("#newColors");
var message = document.querySelector("#message");
var numberOfSquare = 6;
var winningSquare;
var bgColor = "#000";
var gameOver = false;

setUpGame();

function setUpGame() {
    gameOver = false;
    addSquares(numberOfSquare);
    fillArrayWithColors();
    setBackground();
    selectWinningSquare();
    game();

    newColors.textContent = "NEW COLORS";
    header.style.backgroundColor = "#18ad90";
}

newColors.addEventListener("click", function() {
    setUpGame();
})

/* ustawianie randomowych kolorów do obiektu */
function randColor() {
   return Math.floor(Math.random() * 216) + 20;
}

function fillArrayWithColors() {
    squareColors = [];
    for (var i = 0; i < numberOfSquare; i++) {
        squareColors.push(
            { 
                r: randColor(), 
                g: randColor(),
                b: randColor() 
            }
        );
    }
}

/*ustawianie ilości square'ów w zależności do poziomu trudności gry*/
easyGame.addEventListener("click", function() {
    numberOfSquare = 3;
    setUpGame();
    hardGame.classList.remove("selected");
    easyGame.classList.add("selected");
});

hardGame.addEventListener("click", function() {
    numberOfSquare = 6;
    setUpGame();
    hardGame.classList.add("selected");
    easyGame.classList.remove("selected");
});

/*generowanie square'ów w zależnosci od ustawionej ilości*/
function addSquares(n) {
    content.innerHTML = "";
    for (var i = 0; i < n; i++) {
        var square = document.createElement("div");
        square.classList.add("square");
        content.appendChild(square);
    }
    squares = document.querySelectorAll(".square");
}

/*pobiera dane z obiektu zawierającego randomowe r, g i b i zamienia na string*/
function createRGB(color) {
    return "rgb(" + color.r + ", " + color.g + ", " + color.b + ")";
}

/* ustawianie background dla każdego square */
function setBackground() {
    for(var i = 0; i < numberOfSquare; i++) {
        squares[i].style.backgroundColor = createRGB(squareColors[i]);
    }
}

/* losowanie wygrywającego square'a*/
function selectWinningSquare() {
    winningSquare = Math.floor(Math.random() * numberOfSquare);
    headerColorValue.textContent = createRGB(squareColors[winningSquare]);
}

function game() {
    for(var i = 0; i < numberOfSquare; i++) {
        setUpClick(squares[i], i);
    }
}

function setUpClick(element, index) {
    element.addEventListener("click", function() {
        if (gameOver) { return; }

        if (index !== winningSquare) {
            this.style.backgroundColor = bgColor;
            message.textContent = "Try again";

        }
        else {
            gameOver = true;
            winGame();
        }
    });
}

function winGame() {
    var winner = squares[winningSquare].style.backgroundColor;
    for (var i = 0; i < numberOfSquare; i++) {
        squares[i].style.backgroundColor = winner;
    }
    header.style.backgroundColor = winner;
    newColors.textContent = "PLAY AGAIN?";
    message.textContent = "Correct!";  
}