class CalculatorContext {
    constructor() {
        this.displayValue = 0;
    }

    getdisplayValue() {
        return this._displayValue;
    }

    setdisplayValue(value) {
        this._displayValue = value;
        if (this.guiAdapter) {
            this.guiAdapter.display.innerText = this.displayValue.toString();
        }
    }

}