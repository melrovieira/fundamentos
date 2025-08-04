function vperg1(botaoClicado, opcaoSelecionada) {
    if (opcaoSelecionada == 'c1') {
        var respCerta = document.getElementById('c1');
        respCerta.style.backgroundColor = "green";
        document.getElementById('resp1').innerHTML = "☑ Parabéns você acertou!"
    } else {
        var respCerta = document.getElementById('c1');
        respCerta.style.backgroundColor = "green";
        botaoClicado.style.backgroundColor = "red";
        document.getElementById('resp1').innerHTML = "X Ops errou!"
    }
}

