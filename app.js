// Create an array of 9 blank elements for the gameboard.
let board = Array(9).fill(null);
let player = 'X'; //sets the initial player to "x"
let score = {'X' : 0, 'O' :0}; // sets the score for both X and O players to 0


//let docElement = document.querySelectorAll('.cell').forEach((cell) => console.log(Element));

document.querySelectorAll('.cell').forEach((cell, o) => {
    cell.addEventListener('click', () => {
        //current player makes a move
        if(!cell.textContent && !winner(board)) {
            cell.textContent = player; //marks cell by player X or O
            board[o] = player; //update the game with current player

            let checkWinner = winner(board); // checks who's winning
            if(checkWinner) {
                // if there's a winner
                checkWinner.forEach(index => {
                    //highlight winner
                    document.querySelectorAll('.cell')[index].classList.add('winner');

                });
                score[player]++; // score increases for player
                document.querySelector(`#player-${player.toLowerCase()}-score p`).textContent = score[currentPlayer]; // Updates the score display

            } else {
                // if there is not a winner yet, switch to other player.
                player = player === 'X' ? 'O' : 'X';
            }
        }
    });
});

function winner(board) {
    // Define the 8 possible winning lines on the board
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for(let line of lines) {
        // check each line to see if all cells are marked by the same player
        const [a, b, c] = line;
        if(board[a] && board[a] === board[b] && board[a] === board[c]) {
            return line; // If a line is filled by the same player, return line as winning line.
        }
    }
    return null; // if there's no winner.
}


