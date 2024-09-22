// document.addEventListener("DOMContentLoaded", function () {
//   let successMessages = [
//     "Formulário enviado com sucesso!",
//     "Formulário enviado para o email cadastrado.",
//   ];




//   function showSuccessMessages() {
//     let messagesContainer = document.getElementById(
//       "success-messages-container"
//     );

//     successMessages.forEach(function (message, index) {
//       setTimeout(function () {
//         messagesContainer.innerHTML = "<p>" + message + "</p>";
//         messagesContainer.style.display = "block";

//         setTimeout(function () {
//           messagesContainer.style.display = "none";
//           clearForm();
//         }, 2000);
//       }, index * 2500);
//     });
//   }

//   function clearForm() {
//     let form = document.querySelector("form");
//     let inputFields = form.querySelectorAll("input, textarea, select");

//     inputFields.forEach(function (input) {
//       input.value = "";
//     });
//   }

//   function validateForm(message) {
//     let requiredInputs = document.querySelectorAll("[required]");
//     let errorMessagesContainer = document.getElementById("error-messages-container");
//     errorMessagesContainer.innerHTML = ""; 

//     for (let i = 0; i < requiredInputs.length; i++) {
//         if (!requiredInputs[i].value.trim()) {
//           let errorMessage = document.createElement("p");
//             errorMessage.textContent = message;
//             errorMessagesContainer.appendChild(errorMessage);
//             return false;
//         }
//     }
//     return true;
//  }


// function handleButtonClick() {
//   let errorMessagesContainer = document.getElementById("error-messages-container");
//   setTimeout(function () {
//     errorMessagesContainer.style.display = "block";
//     let errorMessage = "Por favor, preencha todos os campos obrigatórios.";
//     if (validateForm(errorMessage)) { 
//       showSuccessMessages();
//       }
//     setTimeout(function () {
//       errorMessagesContainer.style.display = "none";
//     },1000);
   

//   },1000);
// }


//   let confirmButton = document.querySelector(".button-form");
//   confirmButton.addEventListener("click", handleButtonClick);




  
// });

document.addEventListener("DOMContentLoaded", function () {
  let successMessages = [
    "Formulário enviado com sucesso!",
    "Formulário enviado para o email cadastrado.",
  ];

  function showSuccessMessages() {
    let messagesContainer = document.getElementById("success-messages-container");

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
    let errorMessagesContainer = document.getElementById("error-messages-container");
    errorMessagesContainer.innerHTML = ""; 

    let isValid = true;

    requiredInputs.forEach(function (input) {
      if (!input.value.trim()) {
        isValid = false;
        let errorMessage = document.createElement("p");
        errorMessage.textContent = "Por favor, preencha todos os campos obrigatórios.";
        errorMessagesContainer.innerHTML = ""; 
        errorMessagesContainer.appendChild(errorMessage);
        errorMessagesContainer.style.display = "block";
        setTimeout(function () {
          errorMessagesContainer.innerHTML = "";
          errorMessagesContainer.style.display = "none";
        }, 2000);
      }
    });

    return isValid;
  }

  function handleInputChange(event) {
    let input = event.target;
    let inputValue = input.value.trim();
    let errorMessagesContainer = document.getElementById("error-messages-container");

    // Verificar se o campo está vazio
    if (!inputValue && input.hasAttribute("required")) {
      let errorMessage = document.createElement("p");
      errorMessage.textContent = "Por favor, preencha este campo.";
      errorMessagesContainer.innerHTML = ""; 
      errorMessagesContainer.appendChild(errorMessage);
      errorMessagesContainer.style.display = "block";
      setTimeout(function () {
        errorMessagesContainer.innerHTML = "";
        errorMessagesContainer.style.display = "none";
      }, 4000);
      return;
    }

    // Validar o campo de telefone
    if (input.id === "telefone" && !/^\d+$/.test(inputValue)) {
      let errorMessage = document.createElement("p");
      errorMessage.textContent = "Por favor, insira apenas números no campo de telefone.";
      errorMessagesContainer.innerHTML = ""; 
      errorMessagesContainer.appendChild(errorMessage);
      errorMessagesContainer.style.display = "block";
      setTimeout(function () {
        errorMessagesContainer.innerHTML = "";
        errorMessagesContainer.style.display = "none";
      }, 3000);
      return;
    }

    // Validar o campo de nome
    if (input.id === "nome" && !/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(inputValue)) {
      let errorMessage = document.createElement("p");
      errorMessage.textContent = "Por favor, insira apenas letras no campo de nome.";
      errorMessagesContainer.innerHTML = ""; 
      errorMessagesContainer.appendChild(errorMessage);
      errorMessagesContainer.style.display = "block";
      setTimeout(function () {
        errorMessagesContainer.innerHTML = "";
        errorMessagesContainer.style.display = "none";
      }, 3000);
      return;
    }

   
    errorMessagesContainer.style.display = "none";
  }

  function handleButtonClick() {
    let errorMessagesContainer = document.getElementById("error-messages-container");
    errorMessagesContainer.style.display = "none";

    if (validateForm()) {
      showSuccessMessages();
    } else {
      errorMessagesContainer.style.display = "block";
    }
  }

  let confirmButton = document.querySelector(".button-form");
  confirmButton.addEventListener("click", handleButtonClick);

  let inputFields = document.querySelectorAll("input, textarea");
  inputFields.forEach(function (input) {
    input.addEventListener("input", handleInputChange);
  });
});
