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
    const testPoints = [(pointMaker(0,0)), (pointMaker(0,1))];
    const ship1 = shipMaker(testPoints,2);
    const testPoints2 = [(pointMaker(1,1)), (pointMaker(1,2)),(pointMaker(1,3))];
    const ship2 = shipMaker(testPoints2,3);

    const testShips = [ship1,ship2];
    const board = gameBoard(testShips);
    expect(board.countShips()).toBe(2);
});

test('initalizes board with 4 ships', () => {
    const testPoints = [(pointMaker(0,0)), (pointMaker(0,1))];
    const ship1 = shipMaker(testPoints,2);

    const testPoints2 = [(pointMaker(1,1)), (pointMaker(1,2)),(pointMaker(1,3))];
    const ship2 = shipMaker(testPoints2,3);

    const testPoints3 = [(pointMaker(5,5)), (pointMaker(5,6)),(pointMaker(5,7))];
    const ship3 = shipMaker(testPoints2,3);

    const testPoints4 = [(pointMaker(7,20)), (pointMaker(7,21)),(pointMaker(7,22),(pointMaker(7,23)))];
    const ship4 = shipMaker(testPoints2,4);


    const testShips = [ship1,ship2,ship3,ship4];
    const board = gameBoard(testShips);
    expect(board.countShips()).toBe(4);
});

test('sends an attack to one of the ships on the board', () => {
    const testPoints = [(pointMaker(0,0)), (pointMaker(0,1))];
    const ship1 = shipMaker(testPoints,2);

    const testPoints2 = [(pointMaker(1,1)), (pointMaker(1,2)),(pointMaker(1,3))];
    const ship2 = shipMaker(testPoints2,3);

    const testShips = [ship1,ship2];
    const board = gameBoard(testShips);
    board.receiveAttack(1,1)
    expect(ship2.points[0].status).toBe(true);
});

test('sinks a ship on the board', () => {
    const testPoints = [(pointMaker(0,0)), (pointMaker(0,1))];
    const ship1 = shipMaker(testPoints,2);

    const testPoints2 = [(pointMaker(1,1)), (pointMaker(1,2)),(pointMaker(1,3))];
    const ship2 = shipMaker(testPoints2,3);

    const testShips = [ship1,ship2];
    const board = gameBoard(testShips);
    board.receiveAttack(0,0)
    board.receiveAttack(0,1)
    expect(ship1.isSunk()).toBe(true);
});

test('detects gameover all ships sunk', () => {
    const testPoints = [(pointMaker(0,0)), (pointMaker(0,1))];
    const ship1 = shipMaker(testPoints,2);

    const testPoints2 = [(pointMaker(1,1)), (pointMaker(1,2)),(pointMaker(1,3))];
    const ship2 = shipMaker(testPoints2,3);

    const testShips = [ship1,ship2];
    const board = gameBoard(testShips);
    board.receiveAttack(0,0)
    board.receiveAttack(0,1)
    board.receiveAttack(1,1)
    board.receiveAttack(1,2)
    board.receiveAttack(1,3)

    expect(board.isGameOver()).toBe(true);
});


