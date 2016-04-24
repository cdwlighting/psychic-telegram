

module.exports = (function (){

    var Rook = function Rook(location) {
        if(!location)
            throw "Must provide a starting location";

        this.getMoves = function () {
            var moves = [];
            var col = ((location.toUpperCase().charCodeAt(0)-1)  % 8)+1;
            var row = parseInt((location.charAt(1)-1) % 8)+1;

            for( var i = 1; i< 9; i += 1) {
                var columnVal = String.fromCharCode(i+64).toUpperCase() + (row);
                var rowVal = String.fromCharCode(col+64).toUpperCase() + i;
                if(columnVal !== location.toUpperCase())
                {
                    moves.push(columnVal);
                }
                if(rowVal !== location.toUpperCase() && moves.indexOf(rowVal) == -1)
                    moves.push(rowVal);
            }
            moves.sort();

            return moves;
        };
    };

    return Rook;
})();
