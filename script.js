document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    if (nome && email && mensagem) {
        alert("Mensagem enviada com sucesso! Em breve entraremos em contato.");
        // Aqui você poderia enviar os dados do formulário para um servidor, por exemplo
        document.getElementById("form").reset(); // Limpa os campos do formulário
    } else {
        alert("Por favor, preencha todos os campos.");
    }
});
