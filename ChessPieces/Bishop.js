module.exports = (function(undefined){
    return function Bishop(location) {
        if(!location) {
            throw "Must provide a starting location";
        }

        location = location.toUpperCase();

        this.getMoves = function getMoves() {
            var col = ((location.toUpperCase().charCodeAt(0))  % 8) - 1;
            var row = parseInt((location.charAt(1)) % 8) - 1;
            var rightCol, leftCol, upRow, downRow;
            var newPosUpLeft, newPosDownLeft, newPosUpRight, newPosDownRight;
            var moves = [];

            for(var x = 1; x < 8; x += 1)
            {
                // Since we are on Diagnals We shift the columns
                rightCol = col + x;
                leftCol  = col - x;

                // as well as the rows;
                upRow = row + x;
                downRow = row - x;

                newPosUpLeft = String.fromCharCode(leftCol + 65) + (upRow + 1);
                newPosUpRight = String.fromCharCode(rightCol + 65) + (upRow + 1);
                newPosDownLeft = String.fromCharCode(leftCol + 65) + (downRow + 1);
                newPosDownRight = String.fromCharCode(rightCol + 65) + (downRow + 1);

                if(leftCol >= 0 && upRow < 8)
                {
                    if(moves.indexOf(newPosUpLeft) < 0)
                        moves.push(newPosUpLeft);

                }

                if(leftCol >= 0 && downRow >= 0)
                {
                    if(moves.indexOf(newPosDownLeft) < 0)
                        moves.push(newPosDownLeft);
                }

                if(rightCol < 8 && upRow < 8)
                {
                    if(moves.indexOf(newPosUpRight) < 0)
                        moves.push(newPosUpRight);
                }
                if(rightCol < 8 && downRow >= 0)
                {
                    if(moves.indexOf(newPosDownRight) < 0)
                        moves.push(newPosDownRight);
                }

            }

            return moves.sort();
        };
    }
})();
