import esBisiesto from "./esBiciesto";

describe("Es biciesto", () => {
    it("El 4 deberia considerarse como año bisiesto", () => {
        expect(esBisiesto(4)).toEqual(true); 
    })

    it("El 5 no deberia considerarse como año bisiesto", () => {
        expect(esBisiesto(5)).toEqual(false); 
    })

    it("El 8 deberia considerarse como año bisiesto", () => {
        expect(esBisiesto(8)).toEqual(true); 
    })

    it("El 200 no deberia considerarse como año bisiesto", () => {
        expect(esBisiesto(200)).toEqual(false); 
    })

    it("El 300 no deberia considerarse como año bisiesto", () => {
        expect(esBisiesto(300)).toEqual(false); 
    })

    it("El 2000 deberia considerarse como año bisiesto", () => {
        expect(esBisiesto(2000)).toEqual(true); 
    })

})
