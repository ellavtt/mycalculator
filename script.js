function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = '';
}

function calculateResult() {
    const display = document.getElementById("display");
    try {
        // Substitui funções científicas por seu equivalente JavaScript
        let result = eval(display.value.replace(/Math\.(\w+)/g, 'Math.$1'));
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}
