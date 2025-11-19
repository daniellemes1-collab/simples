// script.js

document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contactForm");
  const statusDiv = document.getElementById("status");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); // evitar envio real

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    // Aqui você poderia fazer um envio via AJAX para servidor,
    // Por enquanto, só exibir uma mensagem de "sucesso"
    statusDiv.innerText = "Enviando sua mensagem...";

    setTimeout(() => {
      statusDiv.innerText = `Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`;
      form.reset();
    }, 1000);
  });
});
