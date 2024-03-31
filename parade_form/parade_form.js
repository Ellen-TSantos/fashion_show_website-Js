document.addEventListener("DOMContentLoaded", function () {
  let successMessages = [
    "Formulário enviado com sucesso!",
    "Formulário enviado para o email cadastrado.",
  ];




  function showSuccessMessages() {
    let messagesContainer = document.getElementById(
      "success-messages-container"
    );

    successMessages.forEach(function (message, index) {
      setTimeout(function () {
        messagesContainer.innerHTML = "<p>" + message + "</p>";
        messagesContainer.style.display = "block";

        setTimeout(function () {
          messagesContainer.style.display = "none";
          clearForm();
        }, 2000);
      }, index * 2500);
    });
  }

  function clearForm() {
    let form = document.querySelector("form");
    let inputFields = form.querySelectorAll("input, textarea, select");

    inputFields.forEach(function (input) {
      input.value = "";
    });
  }

  function validateForm(message) {
    let requiredInputs = document.querySelectorAll("[required]");
    let errorMessagesContainer = document.getElementById("error-messages-container");
    errorMessagesContainer.innerHTML = ""; 

    for (let i = 0; i < requiredInputs.length; i++) {
        if (!requiredInputs[i].value.trim()) {
          let errorMessage = document.createElement("p");
            errorMessage.textContent = message;
            errorMessagesContainer.appendChild(errorMessage);
            return false;
        }
    }
    return true;
 }


function handleButtonClick() {
  let errorMessagesContainer = document.getElementById("error-messages-container");
  setTimeout(function () {
    errorMessagesContainer.style.display = "block";
    let errorMessage = "Por favor, preencha todos os campos obrigatórios.";
    if (validateForm(errorMessage)) { 
      showSuccessMessages();
      }
    setTimeout(function () {
      errorMessagesContainer.style.display = "none";
    },1000);
   

  },1000);
}


  let confirmButton = document.querySelector(".button-form");
  confirmButton.addEventListener("click", handleButtonClick);




  
});
