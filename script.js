let canvas = document.querySelector("div.canvas");
let buttonErase = document.querySelector("#eraseButton")
let buttonApplyRes = document.querySelector('#applyRes');
var slider = document.getElementById("resolution");
var sliderValue = document.getElementById("resolutionValue");
var blackButton = document.querySelector("#black");
var rainbowButton = document.querySelector('#rainbow');
var cellsNumber = slider.value;
var mode = 0;

sliderValue.innerHTML = slider.value + "x" + slider.value;
slider.oninput = function() {
    sliderValue.innerHTML = this.value + "x" + this.value;
    cellsNumber = this.value
}

rainbowButton.addEventListener('click', () => mode = 1);
blackButton.addEventListener('click', () => mode = 0);

function createCanvas() {

    for (i=1; i < cellsNumber; i++) {
        const columns = document.createElement("div");
        columns.classList.add("columns");
        canvas.appendChild(columns);

        for (j=1; j< cellsNumber; j++) {
            const rows = document.createElement("div");
            rows.classList.add("rows");
            columns.appendChild(rows);
            rows.addEventListener('mousedown', draw);
            rows.addEventListener('mouseover', draw);

            }
        }    
    }

function recreateCanvas () {
    canvas.innerHTML = "";
    createCanvas();
}    
createCanvas();
buttonApplyRes.addEventListener('click', () => recreateCanvas());

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);


function draw(e) {
    if (e.type === 'mouseover' && mouseDown) {
        if (mode == 1) {
            let R = Math.floor(Math.random() * 255);
            let G = Math.floor(Math.random() * 255);
            let B = Math.floor(Math.random() * 255);
            const color = 'rgb('+ R + ',' + G + ',' + B + ')'
            e.target.style.backgroundColor = color;
        }
        else e.target.style.backgroundColor = "black"
    }
}

buttonErase.addEventListener('click', () => {
    let rows = document.getElementsByClassName("rows");
        for (i=0; i< rows.length; i++) {
            rows[i].style.backgroundColor = "white"
        }
    }
)
       

