var ChessPieces = require('../../ChessPieces.js');

(function KingTest(){
    describe('King Chess Pieces', function(){
        describe('Constructor', function(){
            it('Should Throw exception if not provided with a location.', function(){
                expect(ChessPieces.King).toThrow("Must provide a starting location");
            });
            it('Should Not Throw Exception if provided with a location.', function(){
                expect(function(){ ChessPieces.King('a1');}).not.toThrow("Must provide a starting location");
            });
        });
        describe('getMoves', function() {
            var king;
            it('Should have a member "getMoves"', function()  {
                king = new ChessPieces.King('a1');
                expect(king.getMoves).toBeDefined();
            });
            it('"Should be a function', function() {
                king = new ChessPieces.King('a1');
                expect(king.getMoves instanceof Function).toBeTruthy();
            });
            describe('When King in corner at a1', function(){
                beforeEach(function(){
                    king = new ChessPieces.King('a1');
                });
                it("Should return only valid moves", function() {
                    var expected = ['A2', 'B1', 'B2'];
                    expect(king.getMoves()).toEqual(expected);
                });

            });
            describe('When King in corner at a8', function(){
                beforeEach(function(){
                    king = new ChessPieces.King('a8');
                });
                it("Should return only valid moves", function() {
                    var expected = ['A7', 'B7', 'B8'];
                    expect(king.getMoves()).toEqual(expected);
                });

            });
            describe('When King in corner at h1', function(){
                beforeEach(function(){
                    king = new ChessPieces.King('h1');
                });
                it("Should return only valid moves", function() {
                    var expected = ['G1', 'G2', 'H2' ];
                    expect(king.getMoves()).toEqual(expected);
                });

            });
            describe('When King in corner at h8', function(){
                beforeEach(function(){
                    king = new ChessPieces.King('h8');
                });
                it("Should return only valid moves", function() {
                    var expected = ['G7', 'G8', 'H7' ];
                    expect(king.getMoves()).toEqual(expected);
                });

            });
            describe('When King in center of board', function() {
                beforeEach(function(){
                    king = new ChessPieces.King('d4');
                });
                it("Should return only valid moves", function() {
                    var expected = ['C3', 'C4', 'C5', 'D3', 'D5', 'E3', 'E4','E5'];
                    expect(king.getMoves()).toEqual(expected);
                });
            });
        });
    });
})();
