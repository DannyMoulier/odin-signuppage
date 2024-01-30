function validatePassword() {
  let pass1 = document.querySelector("#password1");
  let pass2 = document.querySelector("#password2");
  let errorInputs = document.querySelectorAll(".error");
  let errorMessage = document.querySelector(".error-message");

  if (pass1.value !== pass2.value) {
    errorInputs.forEach((errorInput) => {
      errorInput.style.border = "1.5px solid rgb(198, 0, 0)";
    });
    errorMessage.innerText = "Passwords do not match"
    return false;
  }
  return true;
}
