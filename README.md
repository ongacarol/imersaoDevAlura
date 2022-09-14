/# imersaoDevAlura
Série de 10 aulas promovidos pela #Alura para introdução à programação, ministradas por @Paulo Silveira, @Rafaella Ballerini e @Guilherme Lima. 

Aula 1 - VARIÁVEIS, OPERAÇÕES E MÉDIA (05/09/2022)
<https://codepen.io/ongacarol/pen/YzLXOaY>

Aula 2 - CONVERSOR DE MOEDAS (06/09/2022)
<https://codepen.io/ongacarol/pen/wvjaRzx>

Aula 3 - MENTALISTA (07/09/2022)
<https://codepen.io/ongacarol/pen/QWryBbN>
<https://codepen.io/ongacarol/pen/QWryBbN>

Aula 4 - ARRAY, LISTA E ALURAFLIX (08/09/2022)
<https://codepen.io/ongacarol/pen/RwyazwY>
<https://codepen.io/ongacarol/pen/NWMNYax>

Aula 5 - FUNÇÕES NO ALURAFLIX (09/09/2022)
<https://codepen.io/ongacarol/pen/vYjGoGY>

Aula 6 - OBJETOS E TABELAS DE CLASSIFICAÇÃO (12/09/2022)
<https://codepen.io/ongacarol/pen/MWGjppE>

Aula 7 - SUPERTRUNFO - LÓGICA DO JOGO (13/09/2022)
<https://codepen.io/ongacarol/pen/GRdjeXw>

Aula 8 - SUPERTRUNFO - CARTAS DO JOGO (14/09/2022)
<>

>> Aula 1
Conteúdo:
- Criar uma conta no CodePen;
- Entender as diferenças entre HTML, CSS e JavaScript;
- Variáveis, manipulação dos valores armazenados e a memória do computador;
- Tipos de variáveis, como texto e inteiro;
- Fixando a quantidade de casas decimais com a função toFixed();
###### Desafios desta aula! 
- Dependendo da nota, mostrar se a aluna ou aluno foi aprovada(o) ou não
- Alterar o fundo da tela da maneira que achar mais legal
- Imprimir na própria página o resultado, ao invés do console
- Criar um conversor de temperaturas entre farenheit e celcius
- Colocar a conta inteira da média em apenas uma linha

>> Aula 2
Conteúdo:
- Interagir com usuário para receber os preços a serem convertidos;
- Criar a lógica para saber como converter;
- Utilizar funções que interagem com a tela;
- Exibir o resultado na tela com innerHTML;
###### Desafios desta aula! 
- Adicionar outras moedas para converter.
- Conversor de quilômetros para anos luz e verificar o tempo que demora para ir de uma estrela para outra.
- Conversor de temperaturas entre farenheit, kelvin e celcius.
- Adicionar uma linha ao projeto desenvolvido para que apareça o valor em bitcoin.

>> Aula 3
Conteúdo:
- Realizar o fork do projeto com template inicial;
- Fazer testes utilizando console.log();
- Criar a lógica por trás do "chute" com if, else if e else;
- Utilizar a função Math.random() do JavaScript para gerar números aleatórios;
###### Desafios desta aula! 
- Adicionar um número de tentativas para a pessoa tentar acertar e imprimir a resposta no final.
- Quando a pessoa errar, deixar na mensagem se o número chutado é maior ou menor que o número secreto.
- Pesquisar e aprender a diferença entre == e ===

>> Aula 4
Conteúdo:
- Criar uma primeira array de filmes usando a sintaxe [];
- Utilizar o método filmes.push("Nome Do Filme") para inserir um novo elemento na lista (ou seja, um novo filme na array);
- Descobrir a quantidade de elementos em uma array com o método array.length;
- Selecionar elementos de uma array utilizando a sintaxe array[número], lembrando sempre que o primeiro índice começa com zero, ou seja, array[0] para o primeiro elemento;
- Utilizar a instrução for para iterar, ou seja, percorrer todos os elementos de uma array;
- Criar uma array com imagens de pôsters de alguns filmes que gostamos;
- Montar a lógica do programa que vai iterar esta array de filmes e exibir cada um deles na tela, integrando o for do JavaScript com document.write().
###### Desafios desta aula!
- Escolher o seu tema preferido para adaptar ao nosso código, ou seja, ao invés de filmes pode ser uma lista de animes, HQ's, cursos, capas de jogos...
- Tentar implementar outras versões da estrutura de repetição que fizemos com for, como por exemplo com foreach ou while
- Criar uma condição para não adicionar filmes repetidos, caso eles já tenham sido adicionados anteriormente
- Criar um campo e botão para adicionar a imagem pela tela, e não direto no código

>> Aula 5
Conteúdo:
- Sintaxe e criação de funções no JavaScript;
- Integrando funções criadas no JavaScript com o HTML que está sendo exibido na tela;
- Condicionando a execução (ou "chamada") de uma função a um clique em um botão na tela;
- Usando o JavaScript para acessar o que está sendo exibido na tela e pegar valores digitados pelo usuário com getElementById() e .value;
- Passar informações que as funções precisam para funcionar, através dos parâmetros;
- Utilizar o .endsWith() para verificar se um texto termina com determinados caracteres;
- Ver mais um exemplo de reatribuição de variável para "limpar" o texto do campo com "".
###### Desafios desta aula! 
- Criar um botão para remover um filme na tela
- Além de colocar a imagem do filme, também adicionar o nome por meio de outro input
- Guardar todos os filmes adicionados em uma lista/array e percorrer essa lista toda vez que quiser imprimir ou remover o filme
- Conversor de moedas: criar funções para cada tipo de conversão e chamá-las dependendo do que você quiser fazer, podendo colocar inputs ou botões e quando clicar chamar cada função converteDolar(), converteReal(), converteEuro() e converteBitcoin(), por exemplo

>> Aula 6
Conteúdo:
- Remover o código estático do HTML;
- Criar um objeto no Javascript para cada jogador;
- Criar uma função que receba um objeto como parâmetro para calcular os pontos;
- Exibir o objeto na página HTML;
- Criar uma função para adicionar vitória, outra para adicionar empate e uma última para adicionar derrota;
- Recalcular os pontos quando vitória ou empate for adicionado.
###### Desafios desta aula! 
- Fazer a lógica de quando houver um empate, obrigatóriamente deveria já ajustar como empate para os demais jogadores
- Validar se todos os pontos estão fazendo sentido, tanto o número de empates, quanto derrotas e vitórias com os demais jogadores (impossível haver mais vitórias que derrotas, por exemplo)
- Adicionar a imagem de cada jogador
- Criar um botão para zerar todos os pontos
- Criar um botão e inputs (campos de texto) para adicionar novos jogadores, com seus respectivos dados
- Utilizar seu jogo preferido para se basear na pontuação da sua tabela de classificação

>> Aula 7
Conteúdo:
- Criar as cartas do jogo e definir seus atributos;
- Desenvolver uma função para sortear uma carta para o jogador e outra para a máquina;
- Exibindo os atributos das cartas na tela para o jogador;
- Obter o atribudo escolhido pelo jogador e comparar com a carta da máquina;
- Comparar o atributo de ambas as cartas e definir um vencedor.
###### Desafios desta aula! 
- Verificar o que acontece caso você não selecione nenhum dos atributos e como solucionar
- Utilizar personagens que você gosta para criar as cartas e compartilhe com o pessoal lá na comunidade do Discord!
-Adicionar a imagem do personagem assim que você selecionar a carta dele

>> Aula 8
Conteúdo:
- Adicionando o campo imagem nos objetos com o caminho da imagem;
- Criar uma função que exibe a carta do jogador após o sorteio das cartas;
- Adicionar a moldura da carta;
- Escrever o resultado na tela após o duelo das cartas informando se o jogador venceu ou perdeu;
- Criar uma função que exibe a carta da máquina;
- Exibir os atributos e pontos da carta da máquina.
###### Desafios desta aula! 
- Criar de fato um baralho, com várias outras cartas
- Desenvolver um sistema em que a cada carta que um jogador ganhe, ele fique com a carta do oponente e vice versa
- Transformar as funções exibirCartaMaquina() e exibirCartaJogador() em apenas uma, chamada exibirCarta(), utilizando para isso a passagem de parâmetros
- Utilizar seus personagens e jogos preferidos nesse projeto

>> Aula 9
Conteúdo:

###### Desafios desta aula! 


>> Aula 10
Conteúdo:

###### Desafios desta aula! 



#imersaodev #alura #imersaodevalura 