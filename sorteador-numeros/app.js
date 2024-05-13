function sortear () {
    let quantidadeDeNumeros = parseInt(document.getElementById("quantidade").value);
    let doNumero = parseInt(document.getElementById("de").value);
    let ateONumero = parseInt(document.getElementById("ate").value);

    let sorteados = [];
    let numero;

    for (let i = 0; i < quantidadeDeNumeros; i++) {
        numero = obterNumeroAleatorio(doNumero, ateONumero);

        while (sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(doNumero, ateONumero);
        }

        sorteados.push(numero);
    }

    let numerosSorteados = document.getElementById("resultado");

    numerosSorteados.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;

    alterarStatusBotao();
}

function obterNumeroAleatorio (min,max) {
    return Math.floor(Math.random() * (max - min +1)) + min;
}

function alterarStatusBotao () {
    botao = document.getElementById("btn-reiniciar");
    if (botao.classList.contains("container__botao-desabilitado")) {
        botao.classList.remove("container__botao-desabilitado");
        botao.classList.add("container__botao");
    } else {
        botao.classList.remove("container__botao");
        botao.classList.add("container__botao-desabilitado");
    }
}

 function reiniciar () {
    document.getElementById("quantidade").value = "";
    document.getElementById("de").value = "";
    document.getElementById("ate").value = "";
    document.getElementById("resultado").innerHTML = `<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>`;
    alterarStatusBotao();
 }