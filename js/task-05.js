const inputArea = document.getElementById("name-input");
const outputArea = document.getElementById("name-output");

function textMarkup(text) {
  outputArea.textContent = text.target.value;
}

inputArea.addEventListener("input", textMarkup);

function makeBlur() {
  if (outputArea.textContent === "") {
    outputArea.textContent = "Anonymous";
  }
}

inputArea.addEventListener("blur", makeBlur);