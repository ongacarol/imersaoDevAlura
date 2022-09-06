function Converter() { //converter() está no onclick do button no HTML
    var valorElemento = document.getElementById("valor"); //vai trazer tudo
    var valor = valorElemento.value; //com value, traz somente o valor digitado, e vai vir em string, tipo "10". O input sempre vem em texto
    var valorNumerico = parseFloat(valor); //o float é para ter o valor texto em número decimal 
    console.log(valorNumerico);
  
    var valorReal = valorNumerico * 5; //5 seria o valor do dolar
    console.log(valorReal);
  
    var elementoConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O resultado em real é R$ " + valorReal;
    elementoConvertido.innerHTML = valorConvertido;
  }
  
  //não é possível digitar letras, só numeros. Isso pq lá no HTML em input, colocaram <input type="number">