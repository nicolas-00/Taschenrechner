class ZahlEingeben {
    constructor() {
        this.calculatorContext = undefined;
    }

    setCalculatorContext(calculatorContext) {
        this.calculatorContext = calculatorContext;
    }

    key1Pressed() {
        var displayValue = this.calculatorContext.displayValue;
        if (displayValue < 100000) {
            displayValue = displayValue * 10 + 1;
        }
        this.calculatorContext.displayValue = displayValue;
    }

    key2Pressed() {
        var displayValue = this.calculatorContext.displayValue;
        if (displayValue < 100000) {
            displayValue = displayValue * 10 + 2;
        }
        this.calculatorContext.displayValue = displayValue;
    }

    key3Pressed() {
        var displayValue = this.calculatorContext.displayValue;
        if (displayValue < 100000) {
            displayValue = displayValue * 10 + 3;
        }
        this.calculatorContext.displayValue = displayValue;
    }

    key4Pressed() {
        var displayValue = this.calculatorContext.displayValue;
        if (displayValue < 100000) {
            displayValue = displayValue * 10 + 4;
        }
        this.calculatorContext.displayValue = displayValue;
    }

    key5Pressed() {
        var displayValue = this.calculatorContext.displayValue;
        if (displayValue < 100000) {
            displayValue = displayValue * 10 + 5;
        }
        this.calculatorContext.displayValue = displayValue;
    }

    key6Pressed() {
        var displayValue = this.calculatorContext.displayValue;
        if (displayValue < 100000) {
            displayValue = displayValue * 10 + 6;
        }
        this.calculatorContext.displayValue = displayValue;
    }

    key7Pressed() {
        var displayValue = this.calculatorContext.displayValue;
        if (displayValue < 100000) {
            displayValue = displayValue * 10 + 7;
        }
        this.calculatorContext.displayValue = displayValue;
    }

    key8Pressed() {
        var displayValue = this.calculatorContext.displayValue;
        if (displayValue < 100000) {
            displayValue = displayValue * 10 + 8;
        }
        this.calculatorContext.displayValue = displayValue;
    }

    key9Pressed() {
        var displayValue = this.calculatorContext.displayValue;
        if (displayValue < 100000) {
            displayValue = displayValue * 10 + 9;
        }
        this.calculatorContext.displayValue = displayValue;
    }

}