function testKey1Pressed(displayValue, newDisplayValue) {
    var zahlEingeben = new ZahlEingeben();
    zahlEingeben.setCalculatorContext(jasmine.createSpyObj("calculatorContext", {
        "getDisplayValue": displayValue,
        "setDisplayValue": undefined
    }));
    zahlEingeben.key1Pressed();
    expect(zahlEingeben.calculatorContext.getDisplayValue).toHaveBeenCalled();
    expect(zahlEingeben.calculatorContext.setDisplayValue).toHaveBeenCalledWith(newDisplayValue);
}


describe("ZahlEingeben", function() {
    it('should be able to be created', function() {
        var zahlEingeben = new ZahlEingeben();
        expect(zahlEingeben).toBeDefined();
    });

    it('should be able to handle key1Pressed()', function() {

        testKey1Pressed(0, 1);
        testKey1Pressed(11, 111);
        testKey1Pressed(111111, 111111);
        testKey1Pressed(2, 21)

        // var zahlEingeben = new ZahlEingeben();
        // zahlEingeben.setCalculatorContext(jasmine.createSpyObj("calculatorContext", {
        //     "getDisplayValue": 0,
        //     "setDisplayValue": undefined
        // }));
        // zahlEingeben.key1Pressed();
        // expect(zahlEingeben.calculatorContext.getDisplayValue).toHaveBeenCalled();
        // expect(zahlEingeben.calculatorContext.setDisplayValue).toHaveBeenCalledWith(1);

        // zahlEingeben.setCalculatorContext(jasmine.createSpyObj("calculatorContext", {
        //     "getDisplayValue": 111111,
        //     "setDisplayValue": undefined
        // }));
        // zahlEingeben.key1Pressed();
        // expect(zahlEingeben.calculatorContext.getDisplayValue).toHaveBeenCalled();
        // expect(zahlEingeben.calculatorContext.setDisplayValue).toHaveBeenCalledWith(111111);
    });
})