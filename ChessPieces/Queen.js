var ChessPieces = ChessPieces || {};

ChessPieces = (function(ChessPieces){

    ChessPieces.Queen = function Queen(location){
        if(!location)
            throw "Must provide a starting location";

        this.getMoves = function getMoves() {
            var col = ((location.toUpperCase().charCodeAt(0) - 1)  % 8);
            var row = parseInt((location.charAt(1) - 1) % 8);

            var expected = [];
            for (var i = 1; i < 9; i += 1) {
                for (var j = 1; j < 9; j += 1) {

                    if (i === col + 1 && j === row + 1 ) {
                        continue;
                    } else {
                        expected.push(String.fromCharCode(i + 64) + j);
                    }
                }
            }

            return expected;
        }

    };

    return ChessPieces;

})(ChessPieces);

module.exports = ChessPieces;
