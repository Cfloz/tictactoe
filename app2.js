class player {
    constructor(name, score, moves) {
        this.name = name;
        this.score = score;
        this.moves = moves;
    }
}

let player1 = new player("Player 1", 0, 0);

let player2 = new player("Player 2", 0, 0);

player1.score = 0;

class board {
    constructor(eventX, evento, board) {
        this.board = Array(9).fill(null);
        this.eventX = eventX;
        this.evento = evento;
    }
}

class game {
  constructor() {
    this.board = new board();
    this.player = new player();
    this.score = "";
    this.eventX = "";
  }
}