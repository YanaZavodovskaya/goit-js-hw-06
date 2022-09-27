const inputText = document.getElementById("name-input");
const outputText = document.getElementById("name-output");

inputText.addEventListener("input", textMarkup);
inputText.addEventListener("input", inputDefault);

function textMarkup(evt) {
    outputText.textContent = evt.target.value;    
}

function inputDefault() {
  if (outputText.textContent === "") {
        outputText.textContent = "Anonymous";
    } 
}

