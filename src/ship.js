

const pointMaker = (x, y,status) => {

    const properties = {
        x,
        y,
        status,
        /*
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
        },*/

    };
    const methods = {
        get x(){ return properties.x},
        get y(){ return properties.y},

        get status(){ return properties.status},
        set status(bool){ return properties.status},

    }

    return Object.assign({}, properties,methods);
}

function deepCopyPoints(points){
    let output = []
    for(let i=0; i<points.length; i++){
        output.push(pointMaker(points[i].x, points[i].y));
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
                if(points[i].x === x && points[i].y === y){
                    return points[i].status;
                }
            }

        },
        receivesAttackAt: (x,y) => {
            let index;  
            for(let i=0; i<points.length; i++){
                if(points[i].x === x && points[i].y === y){
                    index = i;
                    break;
                }
            }
            points[index].status = true; 

        },
 
        isSunk: () => {
            for(let i=0; i<points.length; i++){
                if(!points[i].status){
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


