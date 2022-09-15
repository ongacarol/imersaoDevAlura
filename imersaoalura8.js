var carta1 = {
    nome: "Bulbasauro",
    imagem: "http://pm1.narvii.com/6223/11335ffde96efad386b23068bb8751d77e26c1ef_00.jpg",
    atributos: {
      ataque: 7,
      defesa: 8,
      magia: 6
    }
  };
  
  //console.log(carta1.atributos.ataque);
  
  var carta2 = {
    nome: "Darth Vader",
    imagem: "https://cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/M3KM3Z7NBZFZBFA76SM45SGKPI.png",
    atributos: {
      ataque: 9,
      defesa: 3,
      magia: 2
    }
  };
  
  var carta3 = {
    nome: "Carolindinha",
    imagem: "https://w.wallha.com/ws/13/a2rRGYND.jpg",
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

    //exibirOpcoes(); TIREI PQ MANDAMOS AS OPÇOES DE ATRIBUTO LÁ PRA EXIBIRCARTAJOGADOR
    exibirCartaJogador();

    //uma opção para não correr o risco de repetição e ter que usar o while pode ser remover a carta do deck assim que ela for sorteada, assim não vai repetir. Exemplo se primeiro faz o sorteio *3, o segundo faz *(3-1). 
//Outra opção seria usar o shuffle.
}

/* //temos que escolher um atributo pra duelar com a carta sorteada
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
}   */

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
    var divResultado = document.getElementById("resultado");
    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

    //agora temos que comparar
    if (valorCartaJogador > valorCartaMaquina) {
        htmlResultado = "<p class='resultado-final'>Venceu!</p>";
    } else if (valorCartaMaquina > valorCartaJogador) {
        htmlResultado = "<p class='resultado-final'>Você perdeu, a carta da máquina é maior!</p>";
    } else {
        htmlResultado = "<p class='resultado-final'>Empatou!</p>";
    }
    divResultado.innerHTML = htmlResultado;
    document.getElementById('btnJogar').disabled = true;

    exibirCartaMaquina(); //para chamar a carta do computador
}

function exibirCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador");
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`; //como passar a info da url da nossa img pra ser usada como background da img - estamos mexendo direto numa propriedade do CSS que está no HTML. Estamos mesclando as linguagens usando uma template literal. url é css, o que tá no $ é js. É IGUAL A = "url(" + cartaJogador.imagem + ")"
    //queremos que a img apareça dentro da moldura
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
    //queremos que os atributos apareçam por cima da imagem da moldura
    var tagHTML = "<div id='opcoes' class='carta-status'>"; //REPARE que aqui não fecha a tag. Fecha lá embaixo

    var opcoesTexto = "";
    for (var atributo in cartaJogador.atributos) { 
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"; //br é quebra de linha 
    }

    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`

    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>" //ref à div da linha 105

}

function exibirCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina");
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`; //como passar a info da url da nossa img pra ser usada como background da img - estamos mexendo direto numa propriedade do CSS que está no HTML. Estamos mesclando as linguagens usando uma template literal. url é css, o que tá no $ é js. É IGUAL A = "url(" + cartaJogador.imagem + ")"
    //queremos que a img apareça dentro da moldura
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
    //queremos que os atributos apareçam por cima da imagem da moldura
    var tagHTML = "<div id='opcoes' class='carta-status'>"; //REPARE que aqui não fecha a tag. Fecha lá embaixo

    var opcoesTexto = "";
    for (var atributo in cartaMaquina.atributos) { 
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "</p>"; 
    }

    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`

    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>" 
}