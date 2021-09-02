const squareDiv = document.createElement('div');
const container = document.getElementById('container');
const button = document.createElement('button');
let windowHeight = window.innerHeight - 50;
let windowWidth = window.innerWidth;

document.body.style.margin = "0px";
document.body.style.marginTop = "50px";
document.body.style.padding = "0px";

container.style.display = "grid";
container.style.gridGap = "0px";

document.body.insertBefore(button, container);
button.textContent = "Clear the panel";
button.id = "clearButton";


for(let j=1; j<=windowHeight/16; j++){
    
    for(let i=1; i<=windowWidth/16; i++){
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


for(let counter = 0; counter<boxes.length; counter++) {
    boxes[counter].addEventListener('mouseover', () => {
        boxes[counter].style.backgroundColor = "red";
    });
}

document.getElementById("clearButton").addEventListener('click', () => {
    for(let counter = 0; counter<boxes.length; counter++) {
        boxes[counter].style.backgroundColor = "green";
    }
})