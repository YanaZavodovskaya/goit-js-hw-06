const inputBox = document.getElementById("validation-input");

inputBox.addEventListener("blur", symbolsOutput);

function symbolsOutput(evt) {
  let symbolsInput = evt.target.value.length;
  // console.log(inputBox.dataset.length);
  symbolsInput === Number(inputBox.dataset.length)
    ? (inputBox.classList = "valid")
    : (inputBox.classList = "invalid");
}