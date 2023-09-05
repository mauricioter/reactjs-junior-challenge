function buttonSalvar() {

    function salvarConteudo() {
        // Obter o valor do input
        var conteudo = document.getElementById("input").value;
        // Verificar se o conteúdo não está vazio
        if (conteudo.trim() !== "") {
            let tabela = document.getElementById("tabela")
            let novaLinha = tabela.insertRow(-1);
            let celula = novaLinha.insertCell(0);
            celula.inerHTML = conteudo
        }
    }
    // Associar a função ao clique do botão
    document.getElementById("Butao").addEventListener("click", salvarConteudo);
}
buttonSalvar()

// function addValor() {
//     const conteudo = document.getElementById("input")
//     console.log(conteudo)
//     // if (conteudo.trim() !== "") {
//     //     const tabela = document.querySelectorAll("#tabela")
//     //     const novaLinha = tabela.insertRow(-1);
//     //     let celula = novaLinha.
//     // }
// }