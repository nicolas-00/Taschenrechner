class ZahlLoeschen {
    constructor() {
        this.calculatorContext = undefined;
    }

    setCalculatorContext(calculatorContext) {
        this.calculatorContext = calculatorContext;
    }

    keyCPressed() {
        var displayValue = this.calculatorContext.getDisplayValue();
        displayValue = 0;
        this.calculatorContext.setDisplayValue(displayValue);
    }
}