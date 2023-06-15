const inputEl = document.getElementById('name-input');
const spanEl = document.getElementById('name-output');

inputEl.addEventListener('input', onInput);
function onInput() {
    const name = inputEl.value;
    if (name === '') {
        spanEl.textContent = 'Anonymous';
    } else {
        spanEl.textContent = name;
    }
}

