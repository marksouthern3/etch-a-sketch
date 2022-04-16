const container = document.querySelector('#container');
let tileList = [];

function onHover(event) {
    event.target.classList.add('hovered');
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
            tile.addEventListener('mouseenter', onHover);
            row.appendChild(tile);
            tileList.push(tile);
        }
        container.appendChild(row);
    }
}

function deleteGrid() {
    while (container.firstChild) container.removeChild(container.lastChild); // remove all children from container
}

function resizeGrid() {
    deleteGrid();
    tileList = [];
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
    for (const tile of tileList) tile.classList.remove('hovered');
}

const newGridButton = document.querySelector('#newGridButton');
newGridButton.addEventListener('click', resizeGrid);
const clearGridButton = document.querySelector('#clearGridButton');
clearGridButton.addEventListener('click', clearGrid);

createGrid(16);