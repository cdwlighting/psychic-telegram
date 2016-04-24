var ChessPieces = require('../../Chesspieces');

(function BishopSpec(ChessPieces){
    describe('Bishop Chess Piece', function() {
        describe('Constructor', function () {
            it('Should Throw exception if not provided with a location.', function () {
                expect(ChessPieces.Bishop).toThrow("Must provide a starting location");
            });
            it('Should Not Throw Exception if provided with a location.', function () {
                expect(function () {
                    ChessPieces.Bishop('a1');
                }).not.toThrow("Must provide a starting location");
            });
        });
        describe('getMoves', function() {
            var bishop;
            it('Should have a member "getMoves"', function () {
                bishop = new ChessPieces.Bishop('a1');
                expect(bishop.getMoves).toBeDefined();
            });
            it('"Should be a function', function () {
                bishop = new ChessPieces.Bishop('a1');
                expect(bishop.getMoves instanceof Function).toBeTruthy();
            });
            describe('When Bishop in corner a1', function() {
                beforeEach(function(){
                    bishop = new ChessPieces.Bishop('a1');
                });
                it("Should return only valid moves", function() {
                    var expected = ['B2', 'C3', 'D4', 'E5', 'F6', 'G7', 'H8'].sort();
                    expect(bishop.getMoves()).toEqual(expected);
                });
            });
            describe('When Bishop in center of board', function() {
                beforeEach(function(){
                    bishop = new ChessPieces.Bishop('d5');
                });
                it("Should return only valid moves", function() {
                    var expected = ['C6', 'C4', 'B3', 'B7', 'A2', 'A8', 'E4','E6', 'F3','F7', 'G2','G8', 'H1'].sort();
                    expect(bishop.getMoves()).toEqual(expected);
                });
            });
        });
    });
})(ChessPieces);
