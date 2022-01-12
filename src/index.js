var calculatorContext = new CalculatorContext();
var zahlEingeben = new ZahlEingeben();
var zahlLoeschen = new ZahlLoeschen();
var guiAdapter = new GuiAdapter();

guiAdapter.display = document.getElementById("display");
guiAdapter.button1 = document.getElementById("button-1");
guiAdapter.button2 = document.getElementById("button-2");
guiAdapter.button3 = document.getElementById("button-3");
guiAdapter.button4 = document.getElementById("button-4");
guiAdapter.button5 = document.getElementById("button-5");
guiAdapter.button6 = document.getElementById("button-6");
guiAdapter.button7 = document.getElementById("button-7");
guiAdapter.button8 = document.getElementById("button-8");
guiAdapter.button9 = document.getElementById("button-9");
guiAdapter.buttonC = document.getElementById("button-c");

zahlEingeben.calculatorContext = calculatorContext;
zahlLoeschen.calculatorContext = calculatorContext;
calculatorContext.guiAdapter = guiAdapter;

guiAdapter.button1.onclick = function() {
    zahlEingeben.key1Pressed();
}
guiAdapter.button2.onclick = function() {
    zahlEingeben.key2Pressed();
}
guiAdapter.button3.onclick = function() {
    zahlEingeben.key3Pressed();
}
guiAdapter.button4.onclick = function() {
    zahlEingeben.key4Pressed();
}
guiAdapter.button5.onclick = function() {
    zahlEingeben.key5Pressed();
}
guiAdapter.button6.onclick = function() {
    zahlEingeben.key6Pressed();
}
guiAdapter.button7.onclick = function() {
    zahlEingeben.key7Pressed();
}
guiAdapter.button8.onclick = function() {
    zahlEingeben.key8Pressed();
}
guiAdapter.button9.onclick = function() {
    zahlEingeben.key9Pressed();
}
guiAdapter.buttonC.onclick = function() {
    zahlLoeschen.keyCPressed();
}