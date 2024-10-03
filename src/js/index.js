let tituloQuestao = document.getElementById("tituloQuestao");
let buttonRespostaA = document.getElementById("buttonRespA");
let buttonRespostaC = document.getElementById("buttonRespC");
let buttonRespostaB = document.getElementById("buttonRespB");
let pontos = document.getElementById("pontos");
let questoesJaRespondidas = [];
let respostaCorreta;
let contadorRespostasCorretas = 0;
let contadorPonts;
let contadorPerguntasRespondidas = document.getElementById("contadorPerguntasRespondidas");
let contadorMaximoDePerguntas = document.getElementById("contadorMaximoDePerguntas");
let tentativaInicio = 0;
let tentativaMax = 3;

/*
Manual do Array

0 = A
1 = B
2 = C

EXEMPLO
    Titulo: "Quem descobriu o Brasil?",
    
    0(a) = Pedro Alvares Cabral
    1(b) = Shaolin Matador de porco
    2(c) = Meu pai

    Resposta correta = (0)A
*/

const arrayQuestoes = [
  {
    titulo: "Quem descobriu o Brasil?",
    resposta: ["Pedro Alvares Cabral", "Shaolin Matador de porco", "Meu pai"],
    correta: 0, // Índice da resposta correta
  },
  {
    titulo: "Qual é a fórmula da água?",
    resposta: ["H2O", "CO2", "O2"],
    correta: 0,
  },
  {
    titulo: "Qual é o maior planeta do sistema solar?",
    resposta: ["Terra", "Júpiter", "Marte"],
    correta: 1,
  },
  {
    titulo: "Qual é a capital da França?",
    resposta: ["Paris", "Londres", "Berlim"],
    correta: 0,
  },
  {
    titulo: "Quem escreveu 'Dom Quixote'?",
    resposta: ["Miguel de Cervantes", "William Shakespeare", "Jorge Luis Borges"],
    correta: 0,
  },
  {
    titulo: "Qual é o elemento químico com o símbolo 'Au'?",
    resposta: ["Ouro", "Prata", "Cobre"],
    correta: 0,
  },
  {
    titulo: "Em que ano foi lançada a primeira versão do Windows?",
    resposta: ["1985", "1990", "1995"],
    correta: 0,
  },
  {
    titulo: "Qual é o maior oceano do planeta Terra?",
    resposta: ["Oceano Atlântico", "Oceano Índico", "Oceano Pacífico"],
    correta: 2,
  },
  {
    titulo: "Quem pintou a Mona Lisa?",
    resposta: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso"],
    correta: 0,
  },
  {
    titulo: "Qual é o planeta mais próximo do Sol?",
    resposta: ["Mercúrio", "Vênus", "Marte"],
    correta: 0,
  },
  {
    titulo: "Qual é o esporte mais popular do mundo?",
    resposta: ["Futebol", "Basquete", "Tênis"],
    correta: 0,
  },
  {
    titulo: "Qual é o maior continente em área?",
    resposta: ["Ásia", "África", "América do Norte"],
    correta: 0,
  },
  {
    titulo: "Quem foi o primeiro homem a pisar na Lua?",
    resposta: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin"],
    correta: 0,
  },
]; 

contadorMaximoDePerguntas.innerHTML = (`/${arrayQuestoes.length}`);
function randomizar() {
  if (questoesJaRespondidas.length === arrayQuestoes.length) {
    alert("Você finalizou todas as questões do quiz! Parabéns!");
    return window.location.href = "../../Quiz_Squad06/pages/highscore.html";
  }

  let numeroQuestao;

  do {
    numeroQuestao = Math.floor(Math.random() * arrayQuestoes.length);
  } while (questoesJaRespondidas.includes(numeroQuestao));

  questoesJaRespondidas.push(numeroQuestao);

  let questao = arrayQuestoes[numeroQuestao];
  tituloQuestao.innerHTML = questao.titulo;

  // Obter o índice da resposta correta original
  const indiceCorreto = questao.correta;

  // Embaralhar as respostas
  let respostasEmbaralhadas = questao.resposta.slice();
  respostasEmbaralhadas.sort(() => Math.random() - 0.5);

  // Atribuir as respostas embaralhadas aos botões
  buttonRespostaA.innerHTML = respostasEmbaralhadas[0];
  buttonRespostaB.innerHTML = respostasEmbaralhadas[1];
  buttonRespostaC.innerHTML = respostasEmbaralhadas[2];

  // Encontrar a nova posição da resposta correta no array embaralhado
  respostaCorreta = respostasEmbaralhadas.indexOf(questao.resposta[indiceCorreto]);

  console.log("RESPOSTA CORRETA: " + respostaCorreta);
}

function verificarResposta(respostaUsuario, botaoSelecionado) {
  const indicesRespostas = {
    "A": 0,
    "B": 1,
    "C": 2
  };

  const indiceSelecionado = indicesRespostas[respostaUsuario];

  if (indiceSelecionado === respostaCorreta) {
    botaoSelecionado.style.backgroundColor = "goldenrod"; 
    setTimeout(() => {
      botaoSelecionado.style.backgroundColor = ""; 
    }, 300);
    pontos.innerHTML = parseInt(pontos.innerHTML) + 1;
    contadorRespostasCorretas++;
    contador();

    // Verifica se atingiu o limite de pontos
    if (contadorRespostasCorretas >= 10) {
      alert("Você venceu! Parabéns!");
      window.location.href = "../../Quiz_Squad06/pages/vitoria.html"; // Redirecionar para a página de vitória
    }
  } else {
    alert("Resposta incorreta! Game Over 😭");
    window.location.href = "../../Quiz_Squad06/pages/end.html"; 
  }

  contadorPerguntasRespondidas.innerHTML = parseInt(contadorPerguntasRespondidas.innerHTML) + 1;
  randomizar();
}

function contador() {
  const contadorPonts = contadorRespostasCorretas;  
  localStorage.setItem('Contador', contadorPonts);
  adicionarAoHistorico(contadorPonts);
}

function adicionarAoHistorico(contadorPonts) {
  let historico = JSON.parse(localStorage.getItem('historico')) || [];
  historico.push(contadorPonts);
  localStorage.setItem('historico', JSON.stringify(historico));
  let ultimo = historico[historico.length - 1];
  localStorage.setItem('Valor', ultimo);
}

function name_game() {
  let Nomes = document.getElementById("usuario").value;
  localStorage.setItem('Jogador', Nomes + ' -');
}

buttonRespostaA.onclick = function () {
  verificarResposta("A", buttonRespostaA);
};

buttonRespostaB.onclick = function () {
  verificarResposta("B", buttonRespostaB);
};

buttonRespostaC.onclick = function () {
  verificarResposta("C", buttonRespostaC);
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
