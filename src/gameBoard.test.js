import{pointMaker, shipMaker} from './ship.js';
import{gameBoard} from './gameBoard.js';

test('initalizes board with 10 rows correctly', () => {
const testShips = [];
    expect(gameBoard(testShips).board.length).toBe(10);
});

test('initalizes board with 10 columns correctly', () => {

const testShips = [];
    expect(gameBoard(testShips).board[0].length).toBe(10);
});

test('initalizes board with 2 ships', () => {
    const testPoints = [(pointMaker(0,0,false)), (pointMaker(0,1,false))];
    const ship1 = shipMaker(testPoints,2);
    const testPoints2 = [(pointMaker(1,1,false)), (pointMaker(1,2,false)),(pointMaker(1,3,false))];
    const ship2 = shipMaker(testPoints2,3);

    const testShips = [ship1,ship2];
    const board = gameBoard(testShips);
    expect(board.countShips()).toBe(2);
});

test('initalizes board with 2 ships', () => {
    const testPoints = [(pointMaker(0,0,false)), (pointMaker(0,1,false))];
    const ship1 = shipMaker(testPoints,2);
    const testPoints2 = [(pointMaker(1,1,false)), (pointMaker(1,2,false)),(pointMaker(1,3,false))];
    const ship2 = shipMaker(testPoints2,3);

    const testShips = [ship1,ship2];
    const board = gameBoard(testShips);
    expect(board.countShips()).toBe(2);
});



