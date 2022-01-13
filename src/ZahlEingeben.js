class ZahlEingeben {
    constructor() {
        this.calculatorContext = undefined;
    }

    setCalculatorContext(calculatorContext) {
        this.calculatorContext = calculatorContext;
    }

    keyPressed(value) {
        var displayValue = this.calculatorContext.displayValue;
        if (displayValue < 100000) {
            displayValue = displayValue * 10 + value;
        }
        this.calculatorContext.displayValue = displayValue;
    }

    key0Pressed() {
        this.keyPressed(0)
    }

    key1Pressed() {
        this.keyPressed(1)
    }

    key2Pressed() {
        this.keyPressed(2)
    }

    key3Pressed() {
        this.keyPressed(3)
    }

    key4Pressed() {
        this.keyPressed(4)
    }

    key5Pressed() {
        this.keyPressed(5)
    }

    key6Pressed() {
        this.keyPressed(6)
    }

    key7Pressed() {
        this.keyPressed(7)
    }

    key8Pressed() {
        this.keyPressed(8)
    }

    key9Pressed() {
        this.keyPressed(9)
    }

}