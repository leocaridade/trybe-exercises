let piece = 'knight';
piece = piece.toLowerCase();

switch (piece) {
    case 'king':
        console.log('The King moves from its square to a neighboring square');
        break;
    case 'rook':
        console.log('The Rook can move in its line or row');
        break;
    case 'bishop':
        console.log('The Bishop moves diagonally');
        break;
    case 'queen':
        console.log('The Queen may move like a Rook or a Bishop');
        break;
    case 'knight':
        console.log('The Knight jumps in making the shortest move that is not a straight one');
        break;
    case 'pawn':
        console.log('The Pawn moves one square straight ahead');
        break;
    default:
        console.log('ERRO, peça inválida')
}