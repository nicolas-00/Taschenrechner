describe("ZahlEingeben", function() {
    it('should be able to be created', function() {
        var zahlEingeben = new ZahlEingeben();
        expect(zahlEingeben).toBeDefined();
    });

    it('should be able to handle key1Pressed()', function() {

        var zahlEingeben = new ZahlEingeben();
        zahlEingeben.setCalculatorContext(jasmine.createSpyObj("calculatorContext", {
            "getDisplayValue": 0,
            "setDisplayValue": undefined
        }));
        zahlEingeben.key1Pressed();
        expect(zahlEingeben.calculatorContext.getDisplayValue).toHaveBeenCalled();
        expect(zahlEingeben.calculatorContext.setDisplayValue).toHaveBeenCalledWith(1);

        var zahlEingeben = new ZahlEingeben();
        zahlEingeben.setCalculatorContext(jasmine.createSpyObj("calculatorContext", {
            "getDisplayValue": 1,
            "setDisplayValue": undefined
        }));
        zahlEingeben.key1Pressed();
        expect(zahlEingeben.calculatorContext.getDisplayValue).toHaveBeenCalled();
        expect(zahlEingeben.calculatorContext.setDisplayValue).toHaveBeenCalledWith(11);

        zahlEingeben.setCalculatorContext(jasmine.createSpyObj("calculatorContext", {
            "getDisplayValue": 111111,
            "setDisplayValue": undefined
        }));
        zahlEingeben.key1Pressed();
        expect(zahlEingeben.calculatorContext.getDisplayValue).toHaveBeenCalled();
        expect(zahlEingeben.calculatorContext.setDisplayValue).toHaveBeenCalledWith(111111);
    });
})