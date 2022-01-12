describe("CalculatorContext", function() {
    it("should be able to be created", function() {
        var calculatorContext = new CalculatorContext();
        expect(calculatorContext).toBeDefined();
    });

    it("should be able to process set innerText", function() {
        var calculatorContext = new CalculatorContext();
        calculatorContext.guiAdapter = jasmine.createSpyObj("guiAdapter", {
            dummy: 0
        });
        calculatorContext.guiAdapter.display = jasmine.createSpyObj("display", {
            dummy: 0
        });

        calculatorContext.displayValue = 0;
        expect(calculatorContext.guiAdapter.display.innerText).toEqual("0");

        calculatorContext.displayValue = 1;
        expect(calculatorContext.guiAdapter.display.innerText).toEqual("1");

        calculatorContext.displayValue = 100;
        expect(calculatorContext.guiAdapter.display.innerText).toEqual("100");

        calculatorContext.displayValue = 9999;
        expect(calculatorContext.guiAdapter.display.innerText).toEqual("9999");

        calculatorContext.displayValue = 999999;
        expect(calculatorContext.guiAdapter.display.innerText).toEqual("999999");
    });
});