var carta1 = {
    nome: "Bulbasauro",
    atributos: {
        ataque: 7,
        defesa: 8,
        magia: 6
    }
};

console.log(carta1.atributos.ataque);

var carta2 = {
    nome: "Darth Vader",
    atributos: {
        ataque: 9,
        defesa: 3,
        magia: 2
    }
};

var carta3 = {
    nome: "Carolindinha",
    atributos: {
        ataque: 9,
        defesa: 3,
        magia: 2
    }
};

var cartas = [carta1, carta2, carta3];
var cartaMaquina;
var cartaJogador;


function sortearCarta() { //tem um botão onclick no HTML para sortear a carta
    var numeroCartaMaquina = parseInt(Math.random()*3);
    cartaMaquina = cartas[numeroCartaMaquina]; //o índice dele é random, seria o [i]
    //console.log(cartaMaquina);

    var numeroCartaJogador = parseInt(Math.random()*3);
    //tem que sortear até que as duas cartas saiam diferentes, não podem sair repetidas
    while (numeroCartaJogador == numeroCartaMaquina) {
        numeroCartaJogador = parseInt(Math.random()*3);
    }
    cartaJogador = cartas[numeroCartaJogador]; //o índice dele é random, seria o [i]
    console.log(cartaJogador);
    
//No HTML, o botão tem um "disabled". Isso significa que primeiro tem que sortear a carta, enquanto isso jogar está disabled. Depois que sorteou, o sortearCarta fica disabled e jogar fica habilitado. 
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;

    exibirOpcoes(); //NÃO ESQUECER DE CHAMAR A FUNÇÃO PARA EXIBIR NA TELA
}

//uma opção para não correr o risco de repetição e ter que usar o while pode ser remover a carta do deck assim que ela for sorteada, assim não vai repetir. Exemplo se primeiro faz o sorteio *3, o segundo faz *(3-1). 
//Outra opção seria usar o shuffle. 

//temos que escolher um atributo pra duelar com a carta sorteada
function exibirOpcoes() {
    var opcoes = document.getElementById("opcoes"); //é uma div no HTML
//escrever um HTML pelo js para mostrar os atributos na tela e escolhermos um
    var opcoesTexto = "";

    for (var atributo in cartaJogador.atributos) { //para cada elemento (cria nova variável), chama cartaJogador.atributos >> pq queremos percorrer cada um dos atributos que tem dentro da carta. for...in é um loop bastante usado para listas.
        opcoesTexto += //vai somando os inputs pra aparecer todos os atributos
        "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo; 
    //Concatenando string com a variável. radio é um botão bolinha que clica e escolhe dentre as várias opções. 
    }
    opcoes.innerHTML = opcoesTexto;
}

function obtemAtributoSelecionado() {
    var radioAtributos = document.getElementsByName("atributo"); //na linha 67 - traz todos. Qual escolher? Faz um for
    for (var i = 0; i < radioAtributos.length; i++) {
        if (radioAtributos[i].checked == true) {
            return radioAtributos[i].value;
        }
    }
}

function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado();
    var elementoResultado = document.getElementById("resultado");
    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

    //agora temos que comparar
    if (valorCartaJogador > valorCartaMaquina) {
        elementoResultado.innerHTML = "Você venceu!";
    } else if (valorCartaMaquina > valorCartaJogador) {
        elementoResultado.innerHTML = "Você perdeu, a carta da máquina é maior";
    } else {
        elementoResultado.innerHTML = "Empatou";
    }
    console.log(cartaMaquina);
}



