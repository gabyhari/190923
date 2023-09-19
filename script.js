function salvarNome() {
    const nome = document.getElementById("nome").value;
    
    if (nome.trim() === "") {
        alert("Por favor, digite seu nome.");
        return;
    }

    // Armazenar o nome na sessão
    sessionStorage.setItem("nome", nome);

    // Redirecionar para a segunda tela (tela de confirmação)
    window.location.href = "confirmacao.html";
}
