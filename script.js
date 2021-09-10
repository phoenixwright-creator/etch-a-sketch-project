// declaration of variables to work on the html structure
const title = document.getElementById('title');
const description = document.getElementById('description');
const squareDiv = document.createElement('div');
const container = document.getElementById('container');
const btnDiv = document.createElement('div');
const button = document.createElement('button');

// reset the margins of the html file to 0
document.body.style.margin = "0px";
document.body.style.marginTop = "0px";
document.body.style.padding = "0px";

// style and center the title + description content
title.style.textAlign = "center";
description.style.textAlign = "center";
description.style.padding = "30px";
description.style.paddingTop = "10px";
description.style.borderBottom = "1px solid black";

// style and center the container of the draw panel
container.style.height = "500px";
container.style.width = "500px";
container.style.display = "grid";
container.style.marginLeft = "auto";
container.style.marginRight = "auto";
container.style.marginTop = "20px";
container.style.marginBottom = "30px";
container.style.border = "15px double black";

// add a button to change the pixels of the panel
document.body.insertBefore(btnDiv, container);
btnDiv.appendChild(button);
button.textContent = "Click to draw a new panel";
button.id = "drawButton";

// style and center the button
btnDiv.style.height = "100px";
btnDiv.style.display = "flex";
btnDiv.style.justifyContent = "center";
btnDiv.style.alignItems = "center";
button.style.height = "50px";
button.style.width = "200px";

// function to create the draw panel

function draw() {
    
}

function constructPanel(sizeGrid) {

    let sizeBox = 500/sizeGrid;

    for(let j=1; j<=sizeGrid; j++){
    
        for(let i=1; i<=sizeGrid; i++){
            const squareDiv = document.createElement('div');
            squareDiv.className = "box16";
            squareDiv.style.backgroundColor = "black";
            squareDiv.style.height = `${sizeBox}px`;
            squareDiv.style.width = `${sizeBox}px`;
            squareDiv.style.gridColumn = `${i} / ${i+1}`;
            container.appendChild(squareDiv);
        }
    
    }

    const boxes = document.querySelectorAll('.box16');



    container.addEventListener('click', () => {
        for(let k = 0; k<boxes.length; k++) {
            boxes[k].addEventListener('mouseover', () => {
                boxes[k].style.backgroundColor = "red";
            });
        }
    });
}

// create a default panel
constructPanel(50);

// event listener to create a new panel (erase the actual one + create a new one with desired size)
document.getElementById("drawButton").addEventListener('click', () => {
    while (container.hasChildNodes()) {  

        container.removeChild(container.firstChild);

    }

    let sizeGrid = 200;

    while(sizeGrid>100 || sizeGrid<=0){
        sizeGrid = parseInt(prompt('Please enter the size of the grid you want to draw on (limited to 100) : '));
    }

    constructPanel(sizeGrid);
    
    
    

});