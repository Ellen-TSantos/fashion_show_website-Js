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

  function validateForm() {
    let requiredInputs = document.querySelectorAll("[required]");

    for (var i = 0; i < requiredInputs.length; i++) {
      if (!requiredInputs[i].value.trim()) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return false;
      }
    }

    return true;
  }

  function handleButtonClick() {
    if (validateForm()) {
      showSuccessMessages();
    }
  }

  let confirmButton = document.querySelector(".button-form");
  confirmButton.addEventListener("click", handleButtonClick);
});
