var filme1 = "Harry Potter"
var filme2 = "Iron Man"
var filme3 = "Totoro"

//colocando HTML por meio do JavaScript
//tem que colocar as tags dentro de aspas
document.write("<p>" + filme1 + "</p>")
document.write("<h2>" + filme2 + "</h2>")
document.write("<strong>" + filme3 + "</strong>")

//dá pra estilizar esses elementos no CSS

//fazer lista com array
var listaFilmes = ["Harry Potter", "Iron Man", "Totoro"];
document.write("<p>" + listaFilmes + "</p>")
//acessar cada item por meio do índice
document.write("<p>" + listaFilmes[0] + "</p>")
document.write("<h2>" + listaFilmes[1] + "</h2>")
document.write("<strong>" + listaFilmes[2] + "</strong>")

//para adicionar elementos no array
listaFilmes.push("Frozen");
document.write("<p>" + listaFilmes[3] + "</p>");

//fazer uma estrutura de repetição para não ter que escrever document.write mil vezes

for (let i=0; i<4; i++) {
  document.write("<p>" + listaFilmes[i] + "</p>");
  document.write("<p>" + i + "</p>");
}

//quando criamos o for, temos que ter 3 argumentos: 1- ponto de partida (vamos varrer o array, então como o índice começa em zero), 2- condição (o for vai ser executado até quando? qual o limite de execução?) O limite será o número de elementos.  3- expressão final

//se eu escrever i<4, novos elementos não aparecerão. Para fazer o i ficar dinâmico, usamos o length

listaFilmes.push("Harry Potter 3"); //índice 4
listaFilmes.push("Harry Potter 4"); //índice 5
for (let i=0; i<listaFilmes.length; i++) {
  document.write("<p>" + listaFilmes[i] + "</p>");
}