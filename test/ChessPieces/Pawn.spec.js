var ChessPieces = require('../../ChessPieces/Pawn');


describe("Pawn Chess Pieces", function () {
    describe('Constructor', function () {
        it('Should Throw exception if not provided with a location.', function () {
            expect(ChessPieces.Pawn).toThrow("Must provide a starting location");
        });
        it('Should Not Throw Exception if provided with a location.', function () {
            expect(function () {
                ChessPieces.Pawn('a1');
            }).not.toThrow("Must provide a starting location");
        });
    });
    describe('getMoves', function () {
        var pawn;
        var promotedExpects = function promotoedExpects(expected, curRow, curCol) {

            for(var i = 1; i < 9; i += 1) {
                for (var j = 1; j < 9; j += 1) {

                    if(i === curRow && j === curCol) {
                        continue;
                    } else {
                        expected.push(String.fromCharCode(i + 64) + j);
                    }
                }
            }

            return expected;
        }
        it('Should have a member "getMoves"', function () {
            pawn = new ChessPieces.Pawn('a1');
            expect(pawn.getMoves).toBeDefined();
        });
        it('"Should be a function', function () {
            pawn = new ChessPieces.Pawn('a1');
            expect(pawn.getMoves instanceof Function).toBeTruthy();
        });

        describe('When Pawn on starter row 2', function(){
            beforeEach(function(){
                pawn = new ChessPieces.Pawn('a2');
            });
            it("Should return only valid moves", function() {
                var expected = ['A3', 'A4'];
                expect(pawn.getMoves()).toEqual(expected);
            });

        });
        describe('When pawn on Starter row 7', function(){
            beforeEach(function(){
                pawn = new ChessPieces.Pawn('a7');
            });
            it("Should return only valid moves", function() {
                var expected = ['A8',];
                expect(pawn.getMoves()).toEqual(expected);
            });

        });
        describe('When Pawn in corner at a1 promoted to Queen', function(){
            beforeEach(function(){
                pawn = new ChessPieces.Pawn('a1');
            });
            it("Should return only valid moves", function() {
                var expected = ['Promotion: Queen'];
                var col, row;
                var curCol = 1, curRow = 1;
                expected = promotedExpects(expected, curCol, curRow);
                expect(pawn.getMoves()).toEqual(expected);
            });

        });

        describe('When Pawn in center of board', function() {
            beforeEach(function(){
                pawn = new ChessPieces.Pawn('d4');
            });
            it("Should return only valid moves", function() {
                var expected = ['D5'];
                expect(pawn.getMoves()).toEqual(expected);
            });
        });
    });
});
