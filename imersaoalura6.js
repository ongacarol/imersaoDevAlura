
//eu queria fazer um objeto com todos os itens pra não ter que ficar repetindo, mas não deu certo
/*let itensTabela = {
    nome: "",
    vitorias: "",
    empates: "",
    derrotas: "",
    pontos: "",
}
let carol = {"Carol", 5, 2, 0};
let sophia = {"Sophia", 5, 2, 0};
let maya = {"Maya", 5, 2, 0}; 
Por enquanto vou deixar assim e fazer igual o deles*/

var carol = {nome: "Carol", vitorias: 0, empates: 0, derrotas: 0, pontos: 0};
var sophia = {nome: "Sophia", vitorias: 0, empates: 0, derrotas: 0, pontos: 0};
var maya = {nome: "Maya", vitorias: 0, empates: 0, derrotas: 0, pontos: 0};

function calculaPontos(jogador) {
    var pontos = jogador.vitorias*3 + jogador.empates + jogador.derrotas*-1; //vitória vale 3 pontos e empate vale 1 e derrotas perde 1
    return pontos;
}

carol.pontos = calculaPontos(carol);
sophia.pontos = calculaPontos(sophia);
maya.pontos = calculaPontos(maya);

let jogadores = [carol, sophia, maya];

function exibeJogadoresNaTela(jogadores) {
    let elemento = "";
    for(let i = 0; i < jogadores.length; i++) {
        elemento += "<tr><td>" + jogadores[i].nome + "</td>"; 
        elemento += "<td>" + jogadores[i].vitorias + "</td>";
        elemento += "<td>" + jogadores[i].empates + "</td>";
        elemento += "<td>" + jogadores[i].derrotas + "</td>";
        elemento += "<td>" + jogadores[i].pontos + "</td>";
        elemento += "<td><button onClick='adicionarVitoria("+ i +")'>Vitória</button></td>";
        elemento += "<td><button onClick='adicionarEmpate("+ i +")'>Empate</button></td>";
        elemento += "<td><button onClick='adicionarDerrota("+ i +")'>Derrota</button></td>";
        elemento += "</tr>";
    //o elemento+= é pra pegar a string vazia e coloca também a tr. Significa que o elemento vai ser o que já tinha antes + o novo
    //tudo do HTML através do js tem que estar entre ""
    }
    let tabelaJogadores = document.getElementById('tabelaJogadores');
    tabelaJogadores.innerHTML = elemento;
}

exibeJogadoresNaTela(jogadores);

function adicionarVitoria(i) {
    let jogador = jogadores[i];
    jogador.vitorias++; 
    jogador.pontos = calculaPontos(jogador);
    exibeJogadoresNaTela(jogadores);
}

function adicionarEmpate(i) {
    let jogador = jogadores[i];
    jogador.empates++; 
    jogador.pontos = calculaPontos(jogador);
    exibeJogadoresNaTela(jogadores);
}

function adicionarDerrota(i) {
    let jogador = jogadores[i];
    jogador.derrotas++; 
    jogador.pontos = calculaPontos(jogador);
    exibeJogadoresNaTela(jogadores);
}