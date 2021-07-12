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
                //output[xVal][yVal].setShip(ships[k]);
                //output[xVal][yVal].setHasShip(true);
                output[xVal][yVal].ship = ships[k];
                output[xVal][yVal].hasShip = true;

                //console.log(output[xVal][yVal].getShip());
            }            
        }

        return output;
    }
    const board = initializeBoard();

    const properties = {
        board,
        ships,

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
            console.log(pointsWithShips);
            let counter = 0;
            for(let i=0; i<ships.length; i++){
                for(let j=0; j<pointsWithShips.length; j++){
                    if(ships[i] === pointsWithShips[j].ship){
                        counter++;
                        j += ships[i].length - 1; 
                    }
                }
            }
            return counter;
        },


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