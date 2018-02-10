var square = document.querySelectorAll(".square");
var rgbColor = document.querySelectorAll(".rgbColor");
var squareColors = [];
var easyGame = document.querySelector("#easy");
var hardGame = document.querySelector("#hard");
var newColors = document.querySelector("#newColors");


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

fillArrayWithColors();
