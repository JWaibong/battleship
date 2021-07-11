const pointMaker = (x, y, status) => {

    const properties = {
        x,
        y,
        status,
        setStatus: (bool) => {
            status = bool;
        },
        getStatus: () => {
            return status;
        },

        getX: () => {
            return x
        },
        
        getY: () => {
            return y;
        },

    };

    return Object.assign({}, properties);
}

function deepCopyPoints(points){
    let output = []
    for(let i=0; i<points.length; i++){
        output.push(pointMaker(points[i].getX(), points[i].getY()));
    }
    return output;
}

const shipMaker = (shallowPoints, length) => {

    const points = deepCopyPoints(shallowPoints);

    const checkNum = num => {
        return (num < 0 || !Number.isInteger(num));
    }
    if(checkNum(length) || length == 0){
        return null;
    }
    

    const methods = {

        isDamagedAt: (x,y) => { 
            for(let i=0; i<points.length; i++){
                if(points[i].getX() === x && points[i].getY() === y){
                    return points[i].getStatus();
                }
            }

        },
        receivesAttackAt: (x,y) => {
            let index;  
            for(let i=0; i<points.length; i++){
                if(points[i].getX() === x && points[i].getY() === y){
                    index = i;
                    break;
                }
            }
            points[index].setStatus(true); 

        },
 
        isSunk: () => {
            for(let i=0; i<points.length; i++){
                if(!points[i].getStatus()){
                    return false;
                }
            }
            return true;
        }

    }
    const properties = {
        points,
        length,

    }
    return Object.assign({}, properties, methods);
}



export{shipMaker,pointMaker};


