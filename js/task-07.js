const inputControl = document.getElementById("font-size-control");
const textFontSize = document.getElementById('text');

inputControl.addEventListener('input', changeFontSize)

function changeFontSize(evt) {
    textFontSize.style.fontSize = `${evt.target.value}px`;
}

