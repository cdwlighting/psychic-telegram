var Queen = require('./Queen');

module.exports = (function (Queen){

    return function Pawn(location){
        if(!location)
            throw "Must provide a starting location";

        this.getMoves = function getMoves() {
            var col = ((location.toUpperCase().charCodeAt(0) - 1)  % 8);
            var row = parseInt((location.charAt(1) - 1) % 8);
            var results = [];

            if (!(row < 1 || row > 7)) {
                results.push(String.fromCharCode(col + 65) + ((1 + row) + 1));
                if (row === 1) {
                    results.push(String.fromCharCode(col + 65) + ((1 + row) + 2));
                }

            } else {
                results.push('Promotion: Queen');
                var queen = new Queen(String.fromCharCode(col + 65) + ((1 + row)));
                results = results.concat(queen.getMoves());

            }

            return results;
        }
    };
})(Queen);
