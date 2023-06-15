const fontSizeControl = document.getElementById('font-size-control');
const spanEl = document.getElementById('text');

fontSizeControl.addEventListener('input', onInput);
function onInput() {
    const fontSize = fontSizeControl.value + 'px';
    spanEl.style.fontSize = fontSize;
}