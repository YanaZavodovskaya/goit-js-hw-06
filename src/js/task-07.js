const inputControl = document.getElementById("font-size-control");
const textFontSize = document.getElementById('text')

function changeFontSize(size){
    textFontSize.style.fontSize = `${size.target.value}px`;
}
inputControl.addEventListener('input', changeFontSize)
