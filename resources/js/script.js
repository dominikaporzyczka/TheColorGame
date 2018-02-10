var square = document.querySelectorAll(".square");
var rgbColor = document.querySelectorAll(".rgbColor");
var content = document.querySelector("#content");
var squareColors = [];
var easyGame = document.querySelector("#easy");
var hardGame = document.querySelector("#hard");
var newColors = document.querySelector("#newColors");
var numberOfSquare = 6;

setUpGame();

function setUpGame() {
    fillArrayWithColors();
    addSquares(numberOfSquare);
}

/*ustawia randomowo nagłówek*/
for (var i = 0; i < rgbColor.length; i++) {
    rgbColor[i].textContent = random();
}

/* po kliknięciu zmienia background na background body*/
for(var i = 0; i < square.length; i++) {
    square[i].addEventListener("click", function() {
        this.classList.add("selected");
    });
}

/* ustawianie randomowych kolorów do obiektu */
function random() {
   return Math.floor(Math.random() * 256);
}

function fillArrayWithColors() {
    for (var i = 0; i < square.length; i++) {
        squareColors.push(
            { 
                r: random(), 
                g: random(),
                b: random() 
            }
        );
    }
}

/*ustawianie ilości square'ów w zależności do poziomu trudności gry*/
easyGame.addEventListener("click", function() {
    numberOfSquare = 3;
    setUpGame();
})

hardGame.addEventListener("click", function() {
    numberOfSquare = 6;
    setUpGame();
})

/*generowanie square'ów w zależnosci od ustawionej ilości*/
function addSquares(n) {
    content.innerHTML = "";
    for (var i = 0; i < n; i++) {
        var square = document.createElement("div");
        square.classList.add("square");
        content.appendChild(square);
    }
}

/*pobiera dane z obiektu zawierającego randomowe r, g i b i zamienia na string*/
function createRGB(color) {
    return "rgb(" + color.r + ", " + color.g + ", " + color.b + ")";
}

function 