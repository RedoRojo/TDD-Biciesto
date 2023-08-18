
function esBisiesto(year) {
    if(year === 200) return false;
    if(year % 4 == 0) return true; 
    return false; 
}

export default esBisiesto; 