class CalculatorContext {
    constructor() {
        this.displayValue = 0;
    }

    get displayValue() {
        return this._displayValue;
    }

    set displayValue(value) {
        this._displayValue = value;
        if (this.mainView) {
            this.mainView.display.innerText = this.displayValue.toString();
        }
    }

}