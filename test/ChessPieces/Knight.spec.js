var ChessPieces = require('../../ChessPieces');

(function KightTest(ChessPieces, undefined){
    describe('Knight Chess Pieces', function() {
        describe('Constructor', function () {
            it('Should Throw exception if not provided with a location.', function () {
                expect(ChessPieces.Knight).toThrow("Must provide a starting location");
            });
            it('Should Not Throw Exception if provided with a location.', function () {
                expect(function () {
                    ChessPieces.Knight('a1');
                }).not.toThrow("Must provide a starting location");
            });
        });
        describe('getMoves function', function(knight, undefined){
            it('Should have a member "getMoves"', function()  {
                knight = new ChessPieces.Knight('a1');
                expect(knight.getMoves).toBeDefined();
            });
            it('Should be a function', function() {
                knight = new ChessPieces.Knight('a1');
                expect(knight.getMoves instanceof Function).toBeTruthy();
            });
            it('If Knight is in corner a1 should return [c2, b3]', function(){
                knight = new ChessPieces.Knight('a1');
                expect(knight.getMoves()).toEqual(['B3', 'C2']);
            });
            it('If Knight is in center d4 should return [b3, b5, c2, c6, e2, e6, f3, f5]', function(){
                knight = new ChessPieces.Knight('d4');
                expect(knight.getMoves()).toEqual(['B3', 'B5', 'C2', 'C6', 'E2', 'E6', 'F3', 'F5']);
            });

        });
    });
})(ChessPieces);
