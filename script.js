var canvas = document.querySelector("div.canvas");
var cellsNumber = 16
let buttonErase = document.querySelector("#eraseButton")

let mouseDown = false;

document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

function createCanvas(cellsNumber) {

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

            /*var promHover = new Promise(function(resolve,reject){
                rows.addEventListener('mouseover',resolve);
            });
            var promClick = new Promise(function(resolve,reject){
                rows.addEventListener('mousedown',resolve);
            });
            Promise.all([promClick,promHover]).then(function() {
                rows.style.backgroundColor ="black"
            })
            */
            }
            }    
        }
    
function draw(e) {
    if (e.type === 'mouseover' && mouseDown) {
        e.target.style.backgroundColor = "black"
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
       

