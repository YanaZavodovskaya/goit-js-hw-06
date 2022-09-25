const inputText = document.getElementById("name-input");
const outputText = document.getElementById("name-output");

inputText.addEventListener("input", textMarkup);
inputText.addEventListener("blur", textMarkup);

function textMarkup(evt) {
  if (outputText.textContent === "") {
      outputText.textContent = "Anonymous";
  } else {
    outputText.textContent = evt.target.value;
    }  
}