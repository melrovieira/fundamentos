let number = '';

function insert(num) {

    var result = document.getElementById('resultado').innerHTML;

    var lastChar = result.slice(-1); //Ultimo Caracter

    op = ['+', '-', '/', '.', '*', '**']; //Operadores

    //Condicional que verifica se o lastChar e o num
    //  contem operadores e retorna caso ambos tenham
    if (op.includes(lastChar) && op.includes(num)) {
        return;
    }

    number += num;
    document.getElementById('resultado').innerHTML = number;


    //Cria uma rolagem para esquerda caso o numéro for maior que 17 (evita que a tela se estique conforme os caracteres são digitados)
    if (result.length > 17) {
        document.getElementById('resultado').innerHTML = result.split(17);
    }
}


function clearAll() {
    document.getElementById('resultado').innerHTML = '';
    number = '';

}

function back() {
    var result = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = result.substring(0, result.length - 1);
    number = result.substring(0, result.length - 1);

}

function calcular() {
    var resultado = document.getElementById('resultado').innerHTML;
    if (resultado) {
        //Executa se tiver algo digitado no resultado, ou seja se a condição for verdadeira
        //A função eval atribuída ao elemento resultado, vai avaliar a expressão
        //matemática e exibir o resultado na tela
        number = eval(number);
        document.getElementById('resultado').innerHTML = number;
        number = number + '';
    }
    else {
        //Executa caso a condição seja falsa
        document.getElementById('resultado').innerHTML = 'Erro'
    }
}