var ChessPieces = ChessPieces || {},
    King = require('ChessPieces/King'),
    Queen = require('ChessPieces/Queen'),
    Rook = require('ChessPieces/Rook'),
    Pawn = require('ChessPieces/Pawn'),
    Bishop = require('ChessPieces/Bishop'),
    Knight = require('ChessPieces/Knight')
    ;

ChessPieces = {
    King: King,
    Queen: Queen,
    Rook: Rook,
    Pawn: Pawn,
    Bishop: Bishop,
    Knight: Knight,
};

module.exports =ChessPieces;
