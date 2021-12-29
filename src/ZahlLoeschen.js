class ZahlLoeschen {
    constructor() {
        this.calculatorContext = undefined;
    }

    setCalculatorContext(calculatorContext) {
        this.calculatorContext = calculatorContext;
    }

    keyCPressed() {
        this.calculatorContext.setDisplayValue(0);
    }
}