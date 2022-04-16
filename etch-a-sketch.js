const container = document.querySelector('#container');

for (let i = 1; i <= 16; i++) {
    const row = document.createElement('div');
    row.classList.add('flex');
    row.classList.add('row');
    for (let j = 1; j <= 16; j++) {
        const col = document.createElement('div');
        col.classList.add('flex');
        col.classList.add('tile');
        row.appendChild(col);
    }
    container.appendChild(row);
}