describe("CalculatorContext", function() {
    it("should be able to be created", function() {
        var calculatorContext = new CalculatorContext();
        expect(calculatorContext).toBeDefined();
    });

    it("should be able to process set innerText", function() {
        var calculatorContext = new CalculatorContext();
        calculatorContext.mainView = jasmine.createSpyObj("mainView", {
            dummy: 0
        });
        calculatorContext.mainView.display = jasmine.createSpyObj("display", {
            dummy: 0
        });

        calculatorContext.displayValue = 0;
        expect(calculatorContext.mainView.display.innerText).toEqual("0");

        calculatorContext.displayValue = 1;
        expect(calculatorContext.mainView.display.innerText).toEqual("1");

        calculatorContext.displayValue = 100;
        expect(calculatorContext.mainView.display.innerText).toEqual("100");

        calculatorContext.displayValue = 9999;
        expect(calculatorContext.mainView.display.innerText).toEqual("9999");

        calculatorContext.displayValue = 999999;
        expect(calculatorContext.mainView.display.innerText).toEqual("999999");
    });
});