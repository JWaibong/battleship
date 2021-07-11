import {pointMaker} from './ship.js';


const gameBoard = () => {

    function initializeBoard(){
        const output = [];
        for(let i=0; i<10; i++){
            let row = [];
            for(let j=0; j<10; j++){
                row.push(pointMaker(i,j));
            }
            output.push(row);
        }
        return output;
    }
    const board = initializeBoard();

    const properties = {
        board,

    };

    const methods = {

    };

    return Object.assign({}, properties, methods);

}

export{gameBoard};
// create a point object that contains x and y, add constructer parameter for ships that takes in an array of points

