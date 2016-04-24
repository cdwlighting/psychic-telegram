module.exports = (function (){

    return  function King(location) {
        if(!location)
            throw "Must provide a starting location";

        this.getMoves = function getMoves(){
            var row = ((location.toUpperCase().charCodeAt(0) - 1)  % 8);
            var col = parseInt((location.charAt(1) - 1) % 8);
            var minRow = row === 0 ? row : row - 1;
            var maxRow = row === 7 ? row : row + 1;
            var minColumn = col === 0 ? col : col - 1;
            var maxColumn = col === 7 ? col : col + 1;
            var moves = [];

            for( var i = minRow; i <= maxRow; i +=1 )
            {
                for( var j = minColumn ; j <= maxColumn; j += 1) {
                    if(row === i && col === j) {
                        // this is in valid case becuase if the current square is the same the king is on
                        // we just keep moving.
                    } else {
                        moves.push(String.fromCharCode( i + 65 ) + ( j + 1 ));
                    }

                }
            }

            return moves;
        };
    };

})();
