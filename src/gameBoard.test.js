import{gameBoard} from './gameBoard.js'

test('initalizes board with 10 rows correctly', () => {
    expect(gameBoard().board.length).toBe(10);
}) 
test('initalizes board with 10 columns correctly', () => {
    expect(gameBoard().board[0].length).toBe(10);
}) 