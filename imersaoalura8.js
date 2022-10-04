var carta1 = {
    nome: "Jungkook normal",
    imagem: "https://i.pinimg.com/originals/a7/90/d4/a790d4aa8664bfef83a5c6a460f8105c.gif",
    atributos: {
      altura: 9,
      singing: 10,
      sexappeal: 10
    }
  };
  
  //console.log(carta1.atributos.ataque);
  
  var carta2 = {
    nome: "Jimin",
    imagem: "https://i.pinimg.com/originals/40/bf/df/40bfdff1eb7853e08ca6608c1ec017a7.gif",
    atributos: {
        altura: 5,
        singing: 10,
        sexappeal: 10
    }
  };
  
  var carta3 = {
    nome: "Taehyung",
    imagem: "https://i.gifer.com/origin/f3/f3d42c0d8b88270335598f5e24daf637.gif",
    atributos: {
        altura: 8,
        singing: 10,
        sexappeal: 10
    }
  };

    var carta4 = {
        nome: "JK CORINGA",
        imagem: "https://c.tenor.com/IN04bNQOKskAAAAd/bts-jk-dance-bts-fake-love.gif",
        atributos: {
            altura: 10,
            singing: 10,
            sexappeal: 1000
        }
  };

  var carta5 = {
    nome: "Jin",
    imagem: "https://64.media.tumblr.com/ab90d03e2c7d85d7923b40c9391718c6/30f17f0581bfc29b-ca/s540x810/daa49db91cd036ff9de282da31b82cf882e20fac.gifv",
    atributos: {
        altura: 10,
        singing: 10,
        sexappeal: 9
    }
};

var carta6 = {
    nome: "Suga",
    imagem: "https://pa1.narvii.com/6332/391f87fce226e6060c30c5f4b88494dc61957a9c_hq.gif",
    atributos: {
        altura: 6,
        singing: 10,
        sexappeal: 9
    }
};

var carta7 = {
    nome: "RM",
    imagem: "https://i.pinimg.com/originals/87/cc/c8/87ccc8dd77849fc979315f8c0e975787.gif",
    atributos: {
        altura: 10,
        singing: 10,
        sexappeal: 8
    }
};

var carta8 = {
    nome: "J-hope",
    imagem: "https://i.pinimg.com/originals/61/53/b6/6153b6014f3bfd9ae02bcbee67c0bbc1.gif",
    atributos: {
        altura: 7,
        singing: 9,
        sexappeal: 8
    }
};


var cartas = [carta1, carta2, carta3, carta4, carta5, carta6, carta7, carta8];
var cartaMaquina;
var cartaJogador;


function sortearCarta() { //tem um botão onclick no HTML para sortear a carta
    var numeroCartaMaquina = parseInt(Math.random()*8);
    cartaMaquina = cartas[numeroCartaMaquina]; //o índice dele é random, seria o [i]
    //console.log(cartaMaquina);

    var numeroCartaJogador = parseInt(Math.random()*8);
    //tem que sortear até que as duas cartas saiam diferentes, não podem sair repetidas
    while (numeroCartaJogador == numeroCartaMaquina) {
        numeroCartaJogador = parseInt(Math.random()*8);
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