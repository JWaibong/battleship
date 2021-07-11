import{shipMaker, pointMaker} from './ship.js';


const testPoints = [(pointMaker(0,0)), (pointMaker(0,1))];


test('create a ship of arbitrary length', () => {

    expect(shipMaker(testPoints,2).length).toBe(2);
});





test('detects a hit on an arbitrary point on the ship', () => {


    const ship = shipMaker(testPoints,2);
    ship.receivesAttackAt(0,1);

    expect(ship.isDamagedAt(0,1)).toBe(true);
});



test('detects that a ship is sunk', () => {


    const ship = shipMaker(testPoints,2);
    ship.receivesAttackAt(0,0);
    ship.receivesAttackAt(0,1);

    expect(ship.isSunk()).toBe(true);
});

test('detects that a ship is not sunk', () => {


    const ship = shipMaker(testPoints,2);
    ship.receivesAttackAt(0,0);

    expect(ship.isSunk()).toBe(false);
});
