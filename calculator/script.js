
const result = document.getElementById("result");
function display(character) {
    result.innerHTML += character;
}

function calculate() {
    try {
        result.innerHTML = eval(result.innerHTML);
    } catch (e) {
        alert("Invalid Expression");
        result.innerHTML = '';
    }
}

function toggleSign() {
    (result.innerHTML) *= -1
}

function clearData() {
    result.innerHTML = '';
}