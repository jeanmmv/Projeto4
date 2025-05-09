function validar(){
    const nomeInput = document.getElementById("nome");
    const emailInput = document.getElementById("email");
    const descricaoInput = document.getElementById("descricao");
    let valida = true;

    //FUNÇÃO PARA EXIBIR ERROS
    function mostrarErro(inputElement, mensagem){
        const controle = inputElement.parentNode;
        const erroImg = controle.querySelect(".error")
        const menssagemErro = controle.querySelect('small')

        menssagemErro.innerText = mensagem;
        controle.className = 'control erro';
        erroImg.style.display = 'block';
        valida = false;
    }
    mostrarErro();
    
}