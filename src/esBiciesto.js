
function esBisiesto(year) {
    if(year % 100 == 0) return false;
    else if(year % 4 == 0) return true; 
    return false; 
}

export default esBisiesto; 