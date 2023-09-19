// Recuperar o nome da sessão
const nome = sessionStorage.getItem("nome");

if (nome) {
    document.getElementById("nomeConfirmacao").textContent = nome;
} else {
    // Se o nome não estiver na sessão, redirecionar de volta para a tela de entrada
    window.location.href = "index.html";
}
