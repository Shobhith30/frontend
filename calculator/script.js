
const result = document.getElementById("result");
function display(character) {
    result.innerHTML += character;
}

function calculate() {
    result.innerHTML = (eval(result.innerHTML));
}

function toggleSign() {
    (result.innerHTML) *= -1
}

function clearData() {
    result.innerHTML = '';
}