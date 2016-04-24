ChessPieces = require('../../ChessPieces/Queen');

describe("Queen Chess Piece", function(){
    describe('Constructor', function () {
        it('Should Throw exception if not provided with a location.', function () {
            expect(ChessPieces.Queen).toThrow("Must provide a starting location");
        });
        it('Should Not Throw Exception if provided with a location.', function () {
            expect(function () {
                ChessPieces.Queen('a1');
            }).not.toThrow("Must provide a starting location");
        });
    });
    describe('getMoves', function () {
        var queen;
        var expects = function promotoedExpects (expected, curRow, curCol) {

            for (var i = 1; i < 9; i += 1) {
                for (var j = 1; j < 9; j += 1) {

                    if (i === curRow && j === curCol) {
                        continue;
                    } else {
                        expected.push(String.fromCharCode(i + 64) + j);
                    }
                }
            }

            return expected;
        };
        it('Should have a member "getMoves"', function () {
            queen = new ChessPieces.Queen('a1');
            expect(queen.getMoves).toBeDefined();
        });
        it('"Should be a function', function () {
            queen = new ChessPieces.Queen('a1');
            expect(queen.getMoves instanceof Function).toBeTruthy();
        });
        describe('When Queen in corner at a1 promoted to Queen', function(){
            beforeEach(function(){
                queen = new ChessPieces.Queen('a1');
            });
            it("Should return only valid moves", function() {
                var expected = [];
                var col, row;
                var curCol = 1, curRow = 1;
                expected = expects(expected, curCol, curRow);
                expect(queen.getMoves()).toEqual(expected);
            });

        });

        describe('When Queen in center of board', function() {
            beforeEach(function(){
                queen = new ChessPieces.Queen('d4');
            });
            it("Should return only valid moves", function() {
                var expected = [];
                var col, row;
                var curCol = 4, curRow = 4;
                expected = expects(expected, curCol, curRow);
                expect(queen.getMoves()).toEqual(expected);
            });
        });
    });
});
