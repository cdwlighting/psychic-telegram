var ChessPieces = require('../../ChessPieces/Rook.js');

(function RookTest(ChessPieces){
    describe('Rook Cheese Piece', function() {
        describe('Constructor', function(){
            it('Should Throw exception if not provided with a location.', function(){
                expect(ChessPieces.Rook).toThrow("Must provide a starting location");
            });
            it('Should Not Throw Exception if provided with a location.', function(){
                expect(function(){ ChessPieces.Rook('a1');}).not.toThrow("Must provide a starting location");
            });
        });
        describe('getMoves', function() {
            var rook;
            it('Should have a member "getMoves"', function () {
                rook = new ChessPieces.Rook('a1');
                expect(rook.getMoves).toBeDefined();
            });
            it('"Should be a function', function () {
                rook = new ChessPieces.Rook('a1');
                expect(rook.getMoves instanceof Function).toBeTruthy();
            });
            describe('When Rook in corner at a1', function(){
                beforeEach(function(){
                    rook = new ChessPieces.Rook('a1');
                });
                it("Should return only valid moves", function() {
                    var expected = [];
                    for( var i = 1; i< 9; i += 1) {
                        var columnVal = String.fromCharCode(i+64).toUpperCase() + "1";
                        var rowVal = 'A' + i
                        if(columnVal !== 'A1')
                        {
                            expected.push(String.fromCharCode(i+64).toUpperCase() + "1");
                        }
                        if(rowVal !== 'A1')
                            expected.push('A' + i);
                    }
                    expected.sort();

                    expect(rook.getMoves()).toEqual(expected);
                });

            });
            describe('When Rook in corner at a8', function(){
                beforeEach(function(){
                    rook = new ChessPieces.Rook('H8');
                });
                it("Should return only valid moves", function() {
                    var expected = [];
                    for( var i = 1; i< 9; i += 1) {
                        var columnVal = String.fromCharCode(i+64).toUpperCase() + "8";
                        var rowVal = 'H' + i
                        if(columnVal !== 'H8')
                        {
                            expected.push(columnVal);
                        }
                        if(rowVal !== 'H8')
                            expected.push(rowVal);
                    }
                    expected.sort();

                    expect(rook.getMoves()).toEqual(expected);
                });

            });       });
    });
})(ChessPieces);
