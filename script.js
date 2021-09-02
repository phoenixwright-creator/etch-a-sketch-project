const squareDiv = document.createElement('div');
const container = document.getElementById('container');
const btnDiv = document.createElement('div');
const button = document.createElement('button');
let windowHeight = window.innerHeight - 50;
let windowWidth = window.innerWidth;

document.body.style.margin = "0px";
document.body.style.marginTop = "0px";
document.body.style.padding = "0px";

container.style.height = windowHeight;
container.style.width = windowWidth;
container.style.display = "grid";
container.style.gridGap = "1px";
container.style.justifyContent = "center";
container.style.paddingTop = "30px";
container.style.paddingBottom = "30px";

document.body.insertBefore(btnDiv, container);
btnDiv.appendChild(button);
button.textContent = "Click to draw a new panel";
button.id = "drawButton";

btnDiv.style.height = "100px";
btnDiv.style.display = "flex";
btnDiv.style.justifyContent = "center";
btnDiv.style.alignItems = "center";
btnDiv.style.borderBottom = "2px solid black";

button.style.height = "50px";
button.style.width = "200px";

function constructPanel(sizeGrid) {

    for(let j=1; j<=sizeGrid; j++){
    
        for(let i=1; i<=sizeGrid; i++){
            const squareDiv = document.createElement('div');
            squareDiv.className = "box16";
            squareDiv.style.backgroundColor = "green";
            squareDiv.style.height = "16px";
            squareDiv.style.width = "16px";
            squareDiv.style.gridColumn = `${i} / ${i+1}`;
            container.appendChild(squareDiv);
        }
    
    }

    const boxes = document.querySelectorAll('.box16');

    for(let k = 0; k<boxes.length; k++) {

        boxes[k].addEventListener('mouseover', () => {

            boxes[k].style.backgroundColor = "red";

        });

    }

}

constructPanel(30);

document.getElementById("drawButton").addEventListener('click', () => {
    while (container.hasChildNodes()) {  

        container.removeChild(container.firstChild);

    }

    let sizeGrid = 200;

    while(sizeGrid>100){
        sizeGrid = parseInt(prompt('Please enter the size of the grid you want to draw on (limited to 100px) : '));
    }
    
    constructPanel(sizeGrid);

});