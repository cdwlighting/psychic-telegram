module.exports = (function(undefined) {
    return function Knight(location){
        if(!location)
            throw "Must provide a starting location";

        this.getMoves = function getMoves() {

            var col = ((location.toUpperCase().charCodeAt(0))  % 8) -1;
            var row = parseInt((location.charAt(1)) % 8) - 1;
            var moves = [];
            var leftSingle = col - 1;
            var left = col - 2;
            var upSingle = row + 1;
            var up = row + 2;
            var rightSingle = col + 1;
            var right = col + 2;
            var downSingle = row - 1;
            var down = row - 2;


            if(leftSingle >= 0){
                if(up < 8)
                    moves.push(String.fromCharCode(leftSingle + 65) + ( up + 1));
                if(down >= 0)
                    moves.push(String.fromCharCode(leftSingle + 65) + (down + 1));

            }
            if(rightSingle < 8) {
                if (up < 8)
                    moves.push(String.fromCharCode(rightSingle + 65) + (up + 1));
                if (down >= 0)
                    moves.push(String.fromCharCode(rightSingle + 65) + (down + 1));
            }
            if(left >= 0) {
                if(upSingle < 8)
                    moves.push(String.fromCharCode(left + 65) + (upSingle + 1));

                if(downSingle >= 0)
                    moves.push(String.fromCharCode(left + 65) + (downSingle + 1));

            }
            if(right < 8){
                if(upSingle < 8) {
                    moves.push(String.fromCharCode(right + 65) + (upSingle + 1));
                }
                if(downSingle >= 0)
                    moves.push(String.fromCharCode(right + 65) + (downSingle + 1));

            }

            return moves.sort();
        };
    };

})();
