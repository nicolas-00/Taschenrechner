key1Pressed() {
    var displayValue = this.calculatorContext.displayValue;
    if (displayValue < 100000) {
        displayValue = displayValue * 10 + 1;
    }
    this.calculatorContext.displayValue = displayValue;
}