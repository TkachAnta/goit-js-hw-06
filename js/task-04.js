const buttonElDecrement = document.querySelector('button[data-action="decrement"]');
const buttonElIncrement = document.querySelector('button[data-action="increment"]');
const spanEl = document.getElementById('value');

buttonElDecrement.addEventListener('click', decrementCounter);
buttonElIncrement.addEventListener('click', incrementCounter);

let counterValue = 0;

function updateCounterValue() {
    spanEl.textContent = counterValue;
}

function decrementCounter() {
    counterValue -= 1;
    updateCounterValue();
}

function incrementCounter() {
    counterValue += 1;
    updateCounterValue();
}




