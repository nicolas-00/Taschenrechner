key2Pressed() {
    var displayValue = this.calculatorContext.displayValue;
    if (displayValue < 100000) {
        displayValue = displayValue * 10 + 2;
    }
    this.calculatorContext.displayValue = displayValue;
}