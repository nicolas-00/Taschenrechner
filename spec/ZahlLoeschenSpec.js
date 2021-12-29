function testKeyCPressed(displayValue) {

    var zahlLoeschen = new ZahlLoeschen();
    zahlLoeschen.setCalculatorContext(jasmine.createSpyObj("calculatorContext", {
        "setDisplayValue": 0
    }));
    zahlLoeschen.keyCPressed();
    expect(zahlLoeschen.calculatorContext.setDisplayValue).toHaveBeenCalledWith(0);

}




describe("ZahlLoeschen", function() {
    it('should be able to be created', function() {
        var zahlLoeschen = new ZahlLoeschen();
        expect(zahlLoeschen).toBeDefined();
    });

    it('should be able to handle keyCPressed()', function() {

        testKeyCPressed(200);
        testKeyCPressed(144);
        testKeyCPressed(111111);
        testKeyCPressed(34675);

        // var zahlLoeschen = new ZahlLoeschen();
        // zahlLoeschen.setCalculatorContext(jasmine.createSpyObj("calculatorContext", {
        //     "getDisplayValue": 200,
        //     "setDisplayValue": undefined
        // }));
        // zahlLoeschen.keyCPressed();
        // expect(zahlLoeschen.calculatorContext.setDisplayValue).toHaveBeenCalledWith(0);

        // var zahlLoeschen = new ZahlLoeschen();
        // zahlLoeschen.setCalculatorContext(jasmine.createSpyObj("calculatorContext", {
        //     "getDisplayValue": 12,
        //     "setDisplayValue": undefined
        // }));
        // zahlLoeschen.keyCPressed();
        // expect(zahlLoeschen.calculatorContext.setDisplayValue).toHaveBeenCalledWith(0);

        // zahlLoeschen.setCalculatorContext(jasmine.createSpyObj("calculatorContext", {
        //     "getDisplayValue": 123456,
        //     "setDisplayValue": undefined
        // }));
        // zahlLoeschen.keyCPressed();
        // expect(zahlLoeschen.calculatorContext.setDisplayValue).toHaveBeenCalledWith(0);
    });
})