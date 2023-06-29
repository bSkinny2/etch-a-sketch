var canvas = document.querySelector("div.canvas");
var cellsNumber = 16
let buttonErase = document.querySelector("#eraseButton")


function createCanvas(cellsNumber) {

    for (i=1; i < cellsNumber; i++) {
        const columns = document.createElement("div");
        columns.classList.add("columns");
        canvas.appendChild(columns);

        for (j=1; j< cellsNumber; j++) {
            const rows = document.createElement("div");
            rows.classList.add("rows");
            columns.appendChild(rows);
            rows.addEventListener('mouseover', () => rows.style.backgroundColor ="black")
            }
    }
}

createCanvas(cellsNumber);
let rows = document.getElementsByClassName("rows");
buttonErase.addEventListener('click', () => rows.style.backgroundColor = "white");

