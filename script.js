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

buttonErase.addEventListener('click', () => {
    let rows = document.getElementsByClassName("rows");
        for (i=0; i< rows.length; i++) {
            rows[i].style.backgroundColor = "white"
        }
    }
)
       

