const container = document.querySelector('#container');

let tileList = [];

for (let i = 1; i <= 16; i++) {
    const row = document.createElement('div');
    row.classList.add('flex');
    row.classList.add('row');
    for (let j = 1; j <= 16; j++) {
        const tile = document.createElement('div');
        tile.classList.add('flex');
        tile.classList.add('tile');
        tile.addEventListener('mouseenter', event => event.target.classList.add('hovered'));
        //tile.addEventListener('mouseleave', event => event.target.classList.remove('hovered'));
        row.appendChild(tile);
        tileList.push(tile);
    }
    container.appendChild(row);
}

const resetButton = document.querySelector('#resetButton');

resetButton.addEventListener('click', event => {
    for (const tile of tileList) {
        tile.classList.remove('hovered');
    }
});