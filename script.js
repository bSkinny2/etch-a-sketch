var canvas = document.querySelector("div.canvas");
var cellsNumber = 16

function createCanvas(cellsNumber) {

    for (i=1; i < cellsNumber; i++) {
        const columns = document.createElement("div");
        columns.classList.add("columns");
        canvas.appendChild(columns);

        for (j=1; j< cellsNumber; j++) {
            const rows = document.createElement("div");
            rows.classList.add("rows");
            columns.appendChild(rows);
            }
    }
}

createCanvas(cellsNumber)

