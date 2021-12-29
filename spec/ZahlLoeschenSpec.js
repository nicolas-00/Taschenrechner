describe("ZahlLoeschen", function() {
    it('should be able to be created', function() {
        var zahlLoeschen = new ZahlLoeschen();
        expect(zahlLoeschen).toBeDefined();
    });

    it('should be able to handle keyCPressed()', function() {

        var zahlLoeschen = new ZahlLoeschen();
        zahlLoeschen.setCalculatorContext(jasmine.createSpyObj("calculatorContext", {
            "getDisplayValue": 200,
            "setDisplayValue": undefined
        }));
        zahlLoeschen.keyCPressed();
        expect(zahlLoeschen.calculatorContext.setDisplayValue).toHaveBeenCalledWith(0);

        var zahlLoeschen = new ZahlLoeschen();
        zahlLoeschen.setCalculatorContext(jasmine.createSpyObj("calculatorContext", {
            "getDisplayValue": 12,
            "setDisplayValue": undefined
        }));
        zahlLoeschen.keyCPressed();
        expect(zahlLoeschen.calculatorContext.getDisplayValue).toHaveBeenCalled();
        expect(zahlLoeschen.calculatorContext.setDisplayValue).toHaveBeenCalledWith(0);

        zahlLoeschen.setCalculatorContext(jasmine.createSpyObj("calculatorContext", {
            "getDisplayValue": 123456,
            "setDisplayValue": undefined
        }));
        zahlLoeschen.keyCPressed();
        expect(zahlLoeschen.calculatorContext.getDisplayValue).toHaveBeenCalled();
        expect(zahlLoeschen.calculatorContext.setDisplayValue).toHaveBeenCalledWith(0);
    });
})