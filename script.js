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
        } else if (turns % 2 === 1) {
            currentPlayer.innerText = `Player X's turn`
            box.innerText = 'O';
            turns++;
        }
        if (turns >= 9) {
            alert(`It's a tie!`);
        }
    }
    console.log(turns);
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
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

const getValue = (i) => {
    return boxes[i].innerText;
}

const winCombo = () => {
    winCombination.map(x => {
        console.log(getValue(x[0]), getValue(x[1]), getValue(x[2]))
        return getValue(x[0]) === getValue(x[1]) && getValue(x[1]) === getValue(x[2])
    })
}

const checkWin = () => winCombo().some(x => x)