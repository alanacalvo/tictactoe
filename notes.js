// TIC TAC TOE

// WHITEBOARDING

    // need 9 squares
        // columns and rows
    // 2 players -> x and o
        // specify who goes first or ability for players to choose who goes first
        // once a square is taken it cant be replaced
        // turns must be alternated
    // win condition -> 3 of the same in a row
    // have the players turn on screen and have them be able to put their x or o on screen

    // end game game logic - when board is full, its a tie and game ends
        // 9 turn maximum
        // a way to tell player they've won
        // way to tell a player that they've lost

        // scoreboard for multiple games

        // option to restart game

// PSUEDO-CODING

    // 9 squares -> // buttons
        // div.addeventlistener
        // styling -> display: grid or flexbox
    // value of turns / turn counter
        // use our modulus to control turn x or o
        // turns % 2 = 0 ... player1 (X)
        // if turns % 2 = 1 ... player2  (O)
        // if turns == 9 ... restart game pops up

        let turns = 0
        turns++

        square.addEventListener('click', function)

        if(turns % 2 === 0) {player = X}
        
        turns % 2 == 0 ? X : O


        // array inside array that keeps track of whole board
// or rely on html by if clicked once > add disabled property to button or remove event listener from button
// empty strings falsey
// style pointer events none ??