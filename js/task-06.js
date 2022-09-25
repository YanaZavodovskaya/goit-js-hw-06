const inputBox = document.getElementById("validation-input");

function symbolsOutput(text) {
  let symbolsInput = text.target.value.length;

  symbolsInput === 6
    ? (inputBox.classList = "valid")
    : (inputBox.classList = "invalid");
}
inputBox.addEventListener("blur", symbolsOutput);