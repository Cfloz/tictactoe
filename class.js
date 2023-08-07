class tictactoe {
    constructor() {
        this.board = Array(9).fill(null); // Array representing the 3x3 game board, filled by nothing (null)
        this.player = 'X'; // Starting player as "x"
        this.score = {'X': 0, 'O': 0};
        this.init(); // initialization method that binds elements in html
    }

    init() {
        // iterate over each cell in the board
        document.querySelectorAll('.cell').forEach((cell, o) => {
            //Click even to current cell
            cell.addEventListener('click', () => {
                //checks if cells are empty and if there's no winner
                if (!cell.textContent && !this.winner()) {
                    //Marks the clicked cell and checks for winner
                    this.makeMove(cell, o);
                }
            });
        });
        document.querySelector('#reset').addEventListener('click', () => {
            this.resetGame();
        });
        
        document.querySelector('#reset-score').addEventListener('click', () => {
            this.resetScore();
        });
    }

    // Players move
    makeMove(cell, o) {
        // sets the clicked cell to the current player x or o
        cell.textContent = this.player;
        // updates the internal game board array to reflect the move
        this.board[o] = this.player;

        // check if the current move resulted in a win
        let checkWinner = this.winner();
        if (checkWinner) {
            // if there is a winner, highlight the winning cells
            checkWinner.forEach(index => {
                document.querySelectorAll('.cell')[index].classList.add('winner');
            });
            // the score of the current player
            this.score[this.player]++;
            // updates the score
            document.querySelector(`#player-${this.player.toLowerCase()}-score p`).textContent = this.score[this.player];
            //switch to other player for the next turn
            this.player = this.player === 'X' ? 'O' : 'X';
        } else {
            //if there's no winner switch to other player for next turn
            this.player = this.player === 'X' ? 'O' : 'X';
        }
    }
    // resets the game, clearing the board but keeping the score
    resetGame() {
        this.board = Array(9).fill(null);
        //resets the current player to X
        this.player = 'X';
        // iterate over all cells in the board
        document.querySelectorAll('.cell').forEach(cell => {
            // clear the text context of each tell
            cell.textContent = '';
            //removes the winner highlights
            cell.classList.remove('winner');
        });
    }

    // reset both game and score
    resetScore() {
        // resets the scores for both players
        this.score = {'X': 0, 'O': 0}; 
        // update display
        document.querySelector('#player-x-score p').textContent = 0;
        document.querySelector('#player-o-score p').textContent = 0;

        //reset game board
        this.resetGame();
    }

    winner() {
        // 8 possible ways to win
        const lines = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],
            [0,3,6]
        ];
        for (let line of lines) {
            const [a,b,c] = line; // this makes each line in the array into individual variables a,b,c representing indices on the board
            // check if all three cells in the line are marked by the same player
            if (this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c]) {
                return line;
            }
        }
        return null;
    }




}

new tictactoe();

