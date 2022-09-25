const submitForm = document.querySelector('.login-form')

submitForm.addEventListener('submit', submitFormFoo)

function submitFormFoo(event){
    event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Все поля должны быть заполнены!");
}
const object = {
    email: `${email.value}`,
    password: `${password.value}`
}
submitForm.reset()
}
