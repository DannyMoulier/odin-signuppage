function validatePassword() {
  const pass1 = document.querySelector("#password1");
  const pass2 = document.querySelector("#password2");
  const errorInputs = document.querySelectorAll(".error");
  const errorMessage = document.querySelector(".error-message");

  if (pass1.value !== pass2.value) {
    errorInputs.forEach((errorInput) => {
      errorInput.style.border = "1.5px solid rgb(198, 0, 0)";
    });
    errorMessage.innerText = "Passwords do not match";
    return false;
  } else {
    errorInputs.forEach((errorInput) => {
      errorInput.style.borderColor = "var(--color-base-input-border)";
    });
    errorMessage.innerText = "";
    return true;
  }
}
