
module.exports = (function App(undefined) {
    var ChessPieces = require('ChessPieces');
    var piece;

    return function AppRuntime() {
        this.init = function init(argPiece, argLocation) {
            console.log(argPiece, argLocation);
            if(!argPiece)
            {
                argPiece = "";
            }
            switch(argPiece.toUpperCase()){
                case 'KING':
                    piece = new ChessPieces.King(argLocation);
                    break;
                case 'QUEEN':
                   piece = new ChessPieces.Queen(argLocation);
                    break;
                case 'ROOK':
                    piece = new ChessPieces.Rook(argLocation);
                    break;
                case 'KNIGHT':
                    piece = new ChessPieces.Knight(argLocation);
                    break;
                case 'BISHOP':
                    piece = new ChessPieces.Bishop(argLocation);
                    break;
                case 'PAWN':
                    piece = new ChessPieces.Pawn(argLocation);
                    break;
                default:
                    piece = "[USAGE]\n";
                    piece += "node index.js piece location\n";
                    piece += "\n";
                    piece += "Where piece is one of [King, Queen, Bishop, Rook, Knight, Pawn]\n";
                    piece += "Where location is in the form of [a-h][1-8]\n";
                    piece += "\n";
                    piece += "Will return all possible moves for the given peice from the given location.";
                    break;
            }
        };

        this.run = function run() {
           var moves;

            if(piece.getMoves instanceof Function)
            {
                moves = piece.getMoves();
            } else {
                moves = [piece];
            }

            console.log(moves.join(','));
        };
    }
})();
