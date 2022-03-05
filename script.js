player1 = 'X'
player2 = 'O'
turns = 0

const boxes = document.querySelectorAll('.boxes');
const currentPlayer = document.querySelector('#current-player');

boxes.forEach((box) => box.addEventListener('click', () => {
    if (!box.innerText) {
        if (turns % 2 === 0) {
            currentPlayer.innerText = `Player O's turn`
            box.innerText = 'X';
            turns++;
            console.log(turns)
            return box.innerText;
        } else if (turns % 2 === 1) {
            currentPlayer.innerText = `Player X's turn`
            box.innerText = 'O';
            turns++;
            return box.innerText;
        }
        if (turns >= 9) {
            alert(`It's a tie!`);
        }
    }
    console.log(turns);
    console.log('win?', checkWin)
}))

const resetButton = () => {
    document.querySelector('#reset-button').addEventListener('click', (e) => {
        boxes.forEach((box) => box.innerText = '');
        turns = 0;
        currentPlayer.innerText = ''
        console.log(turns)
    })
}
resetButton()


let winCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

const getValue = (i) => {
    return boxes[i].innerText;
}

const winCombo = () => 
    winCombination.map(
        x => 
            getValue(x[0]) === getValue(x[1]) && 
            getValue(x[1]) === getValue(x[2]) &&
            (getValue(x[0]) === 'X' || getValue(x[0]) === 'O') &&
            (getValue(x[1]) === 'X' || getValue(x[1]) === 'O') &&
            (getValue(x[2]) === 'X' || getValue(x[2]) === 'O')
        )


console.log(winCombo())
const checkWin = () => winCombo().some(x => x)