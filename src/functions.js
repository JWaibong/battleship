function capitalize(string){
    const upperCase = string.charAt(0).toUpperCase();
    return `${upperCase}${string.substring(1,string.length)}`;
}

function analyze(array){
    if(array.length === 0){
        return null;
    }
    array = array.sort((a,b) => (a-b));
    const calculateAvg = (a) => a.reduce((prev,curr) => prev + curr) / a.length;
    const average = calculateAvg(array);
    const min = array[0];
    const max = array[array.length-1];
    const length = array.length;
    return {
        average,
        min,
        max,
        length
    }
    
}

export{capitalize, analyze};
