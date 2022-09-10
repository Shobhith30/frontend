
const result = document.getElementById("result");
function display(character) {
    result.value += character;
}

function calculate() {
    try {
        result.value = eval(result.value);
    } catch (e) {
        alert("Invalid Expression");
        result.value = '';
    }
}

function toggleSign() {
    (result.value) *= -1
}

function clearData() {
    result.value = '';
}