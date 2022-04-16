const container = document.querySelector('#container');

let mode = 'default';

function onHover(event) {
    switch(mode) {
        case 'default':
            event.target.style['background-color'] = 'rgb(0, 0, 0)';
            break;
        case 'rainbow':
            red = Math.floor(Math.random() * 256);
            green = Math.floor(Math.random() * 256);
            blue = Math.floor(Math.random() * 256);
            event.target.style['background-color'] = `rgb(${red}, ${green}, ${blue})`;
            break;
        case 'pressure':
            let colourString = event.target.style['background-color'];
            let colour = colourString.slice(4, colourString.length - 1).split(',');
            for (let i = 0; i <= 2; i++) colour[i] = parseInt(colour[i]);
            let colourValue = Math.max(0, colour[0] - 20)
            event.target.style['background-color'] = `rgb(${colourValue}, ${colourValue}, ${colourValue})`;
            break;
        case 'eraser':
            event.target.style['background-color'] = 'rgb(255, 255, 255)';
            break;
    }
}

function createGrid(size) {
    for (let i = 1; i <= size; i++) {
        const row = document.createElement('div');
        row.classList.add('flex');
        row.classList.add('row');
        for (let j = 1; j <= size; j++) {
            const tile = document.createElement('div');
            tile.classList.add('flex');
            tile.classList.add('tile');
            tile.style['background-color'] = 'rgb(255, 255, 255)'
            tile.addEventListener('mouseenter', onHover);
            row.appendChild(tile);
        }
        container.appendChild(row);
    }
}

function deleteGrid() {
    while (container.firstChild) container.removeChild(container.lastChild); // remove all children from container
}

function resizeGrid() {
    deleteGrid();
    let input = prompt('What size grid?');
    let size = parseInt(input);
    // check that input is valid
    while (!size || size < 1 || size > 100) {
        input = prompt('What size grid? (Please enter a number from 1 to 100.)');
        size = parseInt(input);
    }
    createGrid(size);
}

function clearGrid() {
    const tileList = document.querySelectorAll('.tile');
    for (const tile of tileList) tile.style['background-color'] = 'rgb(255, 255, 255)';
}

const newGridButton = document.querySelector('#newGridButton');
newGridButton.addEventListener('click', resizeGrid);
const clearGridButton = document.querySelector('#clearGridButton');
clearGridButton.addEventListener('click', clearGrid);
const defaultButton = document.querySelector('#defaultButton');
defaultButton.addEventListener('click', () => mode = 'default');
const rainbowButton = document.querySelector('#rainbowButton');
rainbowButton.addEventListener('click', () => mode = 'rainbow');
const pressureButton = document.querySelector('#pressureButton');
pressureButton.addEventListener('click', () => {
    clearGrid();
    mode = 'pressure';
});
const eraserButton = document.querySelector('#eraserButton');
eraserButton.addEventListener('click', () => mode = 'eraser');

createGrid(16);