import esBisiesto from "./esBiciesto";

describe("Es biciesto", () => {
    it("El 4 deberia considerarse como año bisiesto", () => {
        const result = esBisiesto(4);
        expect(result).toEqual(true); 
    })
})
