function buttonSalvar() {
    var conteudoSalvo = ""
    function salvarConteudo() {
        // Obter o valor do input
        var conteudo = document.getElementById("input").value;
        // Verificar se o conteúdo não está vazio
        if (conteudo.trim() !== "") {
            conteudoSalvo = conteudo;
            alert("Conteúdo salvo");
        } else {
            alert("O campo está vazio. Por favor, digite algo antes de salvar.");
        }
    }
    // Associar a função ao clique do botão
    document.getElementById("Butao").addEventListener("click", salvarConteudo);
}
buttonSalvar()

