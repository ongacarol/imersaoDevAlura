var numeroSecreto = parseInt(Math.random()*11);

function Chutar() {
    var resultado = document.getElementById('resultado');
    var chute = parseInt(document.getElementById("valor").value) //não esquecer do value pq se não vem o input inteiro
    if(chute === numeroSecreto) {
        resultado.innerHTML = "Você acertou!";
    } else if (chute > 10 || chute < 0) {
        resultado.innerHTML = "Você deve digitar um número de 0 a 10";
    } else if (chute == "") {
        resultado.innerHTML = "Digite um número"
    } else {
        resultado.innerHTML = "Errou! O número secreto era " + numeroSecreto;
    }
}

//o resultado vai ser imprimido no h2 lá do HTML