let tituloQuestao = document.getElementById("tituloQuestao");
let buttonRespostaA = document.getElementById("buttonRespA");
let buttonRespostaB = document.getElementById("buttonRespB");
let buttonRespostaC = document.getElementById("buttonRespC");
let questoesJaRespondidas = [];
let respostaCorreta;
let contadorRespostasCorretas = 0;
let contadorRespostasIncorretas = 0;

const arrayQuestoes = [
  {
    titulo: "Quem descobriu o Brasil?",
    resposta: ["Pedro Alvares Cabral", "Shaolin Matador de porco", "Meu pai"],
    correta: "A",
  },
  {
    titulo: "Qual é a fórmula da água?",
    resposta: ["H2O", "CO2", "O2"],
    correta: "A",
  },
  {
    titulo: "Qual é o maior planeta do sistema solar?",
    resposta: ["Terra", "Júpiter", "Marte"],
    correta: "B",
  },
];

function randomizar() {

  if (questoesJaRespondidas.length === arrayQuestoes.length) {//Caso o usuário já tenha respondidos todas as questões do quiz
    questoesJaRespondidas = [];//Reseta o questoesJaRespondidas para nenhuma, assim retornando as questões (Espero que não seja necessário, mas estou me protegendo desse problema 🤔). 
    alert("Você finalizou todas as questões do quiz! Parabéns!");//Ninguém vai ver essa mensagem kkkkkkk
  }

  let numeroQuestao;

  do {
    numeroQuestao = Math.floor(Math.random() * arrayQuestoes.length); // Escolher um número aleatório dentro do comprimento do array
  } while (questoesJaRespondidas.includes(numeroQuestao)); // Garantir que a pergunta não foi respondida

  questoesJaRespondidas.push(numeroQuestao); // Adicionar a questão à lista de já respondidas

  let questao = arrayQuestoes[numeroQuestao]; // Escolher a questão aleatoriamente

  tituloQuestao.innerHTML = questao.titulo; // Título da questão no HTML
  buttonRespostaA.innerHTML = questao.resposta[0]; // Alternativa 1 no HTML
  buttonRespostaB.innerHTML = questao.resposta[1]; // Alternativa 2 no HTML
  buttonRespostaC.innerHTML = questao.resposta[2]; // Alternativa 3 no HTML

  respostaCorreta = questao.correta; // Resposta da questão
}

function verificarResposta(respostaEscolhida) {
  if (respostaEscolhida === respostaCorreta) {
    contadorRespostasCorretas++; //Soma +1  pontos positivos na pontuação do usuário
    alert("Resposta correta!");
  } else {
    contadorRespostasIncorretas++; //Soma +1 pontos negativos na pontuação do usuário
    alert("Resposta incorreta!");
  }
  randomizar(); // Carregar uma nova questão após a resposta
}

buttonRespostaA.onclick = function () {
  verificarResposta("A");
};

buttonRespostaB.onclick = function () {
  verificarResposta("B");
};

buttonRespostaC.onclick = function () {
  verificarResposta("C");
};

// Inicializar com uma questão
randomizar();

/*
Necessária uma função para parar o programa quando uma quantidade X de pontoso positivos sejam alcançados, e o mesmo para caso seja pontos negativos.

Gostaria de uma função para randomizar a posição da resposta correta entre os botões.

Sinto que deveriamos ter ao menos 10 questões no minimo

Uma página para caso de vitória, e uma para derrota.

E um button com a função de reiniciar o programa caso o usuário queira
*/
