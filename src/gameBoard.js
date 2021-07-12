import {pointMaker} from './ship.js';

const boardPointMaker = (x,y) => {
    const proto = Object.create(pointMaker(x,y));
    
    const properties = {
        hasShip: false,
        ship: null
    }

    const methods = {
        /*
        getHasShip: () => {
            return hasShip;
        },
        setHasShip: (bool) => {
            properties.hasShip = bool;
        },
        setShip: (shipInput) => {
            properties.ship = shipInput;
        },
        getShip: () => {
            return properties.ship;
        },*/

        get hasShip (){ return properties.hasShip},
        set hasShip (bool){return properties.hasShip },

        get ship (){ return properties.ship},
        set ship (shipInput){ return properties.ship},





    }
    return Object.assign({}, proto, properties, methods);

}

const gameBoard = (ships) => {

    function initializeBoard(){
        const output = [];
        for(let i=0; i<10; i++){
            let row = [];
            for(let j=0; j<10; j++){
                row.push(boardPointMaker(i,j));
            }
            output.push(row);
        }

        for(let k=0; k<ships.length; k++){
            for(let l=0; l<ships[k].points.length; l++){
                const xVal = ships[k].points[l].x;
                const yVal = ships[k].points[l].y;

                output[xVal][yVal].ship = ships[k];
                output[xVal][yVal].hasShip = true;

    
            }            
        }

        return output;
    }
    const board = initializeBoard();

    const properties = {
        board,
        ships,
        missedAttacks: [],


    };

    const methods = {
        countShips: () => {
            const pointsWithShips = (function filterBoard(b){
                const output = []
                for(let i=0; i<b.length; i++){
                    for(let j=0; j<b[i].length; j++){
                        if(b[i][j].hasShip){
                            output.push(b[i][j]);
                        }
                    }
                }
                return output
            })(board);
            const temp = []
            for(let i=0; i<ships.length; i++){
                temp.push(pointsWithShips.filter(point => point.ship === ships[i]));
            }
            return temp.length;
        },
        receiveAttack: (xCoord,yCoord) => {
            if(board[xCoord][yCoord].hasShip){
                board[xCoord][yCoord].ship.receivesAttackAt(xCoord,yCoord);
            }
            else{
                properties.missedAttacks.push(pointMaker(xCoord,yCoord))

            }
        },
        isGameOver: () => {
            return ships.filter(ship => ship.isSunk()).length === ships.length;
        }



    };

    return Object.assign({}, properties, methods);

}

export{gameBoard};

/* if a ship is a collection of points
and the board is a collection of points
how do I place the ship on the board

the board can also have a collection of ships where 
each ship determines which board space is taken up

can have a placeShips() function that goes through each ship and marks the points
on the board with corresponding coordinates to a reference with that ship



*/