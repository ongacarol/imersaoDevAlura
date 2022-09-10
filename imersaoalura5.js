function adicionarFilme() {
    var filmeFavorito = document.getElementById('filme').value;
    if (filmeFavorito.toLowerCase().endsWith(".jpg")) {
        listarFilmesNaTela(filmeFavorito);
    } else {
        console.error("Endereço inválido");
    }
    //limpar o campo de busca ao executar
    document.getElementById('filme').value = "";
}

function listarFilmesNaTela (filme) {
    var elementoFilme = "<img src=" + filme + ">";
    var elementoListaFilmes = document.getElementById('listaFilmes');
    elementoListaFilmes.innerHTML += elementoFilme; //para que ao adicionar, ele acumular os filmes, não ficar por cima do outro
}
