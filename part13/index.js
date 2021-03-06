const ticTacToe = document.querySelectorAll(".element");
const messageBox = document.getElementById('messageBox');
const resetButton = document.getElementById('resetButton');
const clickedCells = [
    [],
    [],
    []
];

let winner = false;
let currentPlayer = '✗';
messageBox.textContent = `It's ${currentPlayer} Player's turn!`

function setValue(e) {
    if (e.target.textContent == '' && winner === false) {
        e.target.dataset.mark = currentPlayer;
        e.target.textContent = e.target.dataset.mark;
        switch (currentPlayer) {
            case '✗':
                currentPlayer = '◯';
                break;
            case '◯':
                currentPlayer = '✗';
                break;
        }
        // Add ij coordinates in clickedCells 2D array
        clickedCells[e.target.dataset.i].push(e.target.dataset.j);
        clickedCells[e.target.dataset.i].sort();
        
        messageBox.textContent = `It's ${currentPlayer} Player's turn!`
    }
    winner = checkWinner(ticTacToe)
    if (winner != false) {
        messageBox.textContent = `${winner} Player won!`;
        if (winner === 'tie') {
            messageBox.textContent = `Game tied!`
        }
    }
    return null;
}

function checkWinner(array) {
    if (
        array[0].dataset.mark === array[1].dataset.mark &&
        array[0].dataset.mark === array[2].dataset.mark &&
        array[0].dataset.mark != ''
    ) return array[0].dataset.mark;

    if (
        array[3].dataset.mark === array[4].dataset.mark &&
        array[3].dataset.mark === array[5].dataset.mark &&
        array[3].dataset.mark != ''
    ) return array[3].dataset.mark;

    if (
        array[6].dataset.mark === array[7].dataset.mark &&
        array[6].dataset.mark === array[8].dataset.mark &&
        array[6].dataset.mark != ''
    ) return array[6].dataset.mark;

    if (
        array[0].dataset.mark === array[3].dataset.mark &&
        array[0].dataset.mark === array[6].dataset.mark &&
        array[0].dataset.mark != ''
    ) return array[0].dataset.mark;

    if (
        array[1].dataset.mark === array[4].dataset.mark &&
        array[1].dataset.mark === array[7].dataset.mark &&
        array[1].dataset.mark != ''
    ) return array[1].dataset.mark;

    if (
        array[2].dataset.mark === array[5].dataset.mark &&
        array[2].dataset.mark === array[8].dataset.mark &&
        array[2].dataset.mark != ''
    ) return array[2].dataset.mark;

    if (
        array[0].dataset.mark === array[4].dataset.mark &&
        array[0].dataset.mark === array[8].dataset.mark &&
        array[0].dataset.mark != ''
    ) return array[0].dataset.mark;

    if (
        array[2].dataset.mark === array[4].dataset.mark &&
        array[2].dataset.mark === array[6].dataset.mark &&
        array[2].dataset.mark != ''
    ) return array[2].dataset.mark;

    let emptyCells = 9
    array.forEach((e)=>{
        if (e.dataset.mark != '') emptyCells--;
    })
    if (emptyCells <= 0 ) {
        return 'tie';
    }
    return false;
}

// Set global coordinates to be set when rendering cells
let i = 0;
let j = 0;

ticTacToe.forEach((element)=>{
    element.addEventListener('click', (e)=>{setValue(e)});

    element.dataset.mark = '';
    element.dataset.i = i;
    element.dataset.j = j;

    i++;
    if (i === 3) {
        i = 0;
        j++;
    }
})
resetButton.addEventListener('click', ()=>{location.reload()});