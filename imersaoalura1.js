var nome = "Carolina";

//notas de cada bimestre
var notaPB = 1.777
var notaSB = 7.567
var notaTB = 4.9
var notaQB = 9.63

var notaTotal = (notaPB + notaSB + notaTB + notaQB)
var mediaFinal = notaTotal / 4

var notaFixada = mediaFinal.toFixed(1) //toFixed arredonda. Dentro do () coloca o número de casas decimais. 

console.log("Bem vinda " + nome);
console.log(`Sua média final é ${notaFixada}`); //LEMBRAR DE USAR CRASES PARA INTERPOLAR

if (notaFixada >= 6) {
    console.log("Parabéns! Você foi aprovada!")
} else {
    console.log("Bleeh, não passou")
}