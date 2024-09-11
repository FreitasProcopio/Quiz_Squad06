let resposta;
let tituloQuestao = document.getElementById("tituloQuestao");
let buttonRespostaA = document.getElementById("buttonRespA");
let buttonRespostaB = document.getElementById("buttonRespB");
let buttonRespostaC = document.getElementById("buttonRespC");

let contadorRespostasCorretas = 0;
let contadorRespostasIncorretas = 0;

function randomizar() {

    let numeroQuestao = Math.floor(Math.random() * 10) + 1; //Escolher um número aleatório de 1 a 10

    let respostaQuestao = Math.floor(Math.random() * 3) + 1;


    switch (numeroQuestao) {
        case 1:
            // Questão 1
            tituloQuestao.innerHTML = "Texto da Questão 1";
            buttonRespostaA.innerHTML = "Resposta A1";
            buttonRespostaB.innerHTML = "Resposta B1";
            buttonRespostaC.innerHTML = "Resposta C1";
            resposta = "A"; // Resposta correta para Questão 1
            break;
        case 2:
            // Questão 2
            tituloQuestao.innerHTML = "Texto da Questão 2";
            buttonRespostaA.innerHTML = "Resposta A2";
            buttonRespostaB.innerHTML = "Resposta B2";
            buttonRespostaC.innerHTML = "Resposta C2";
            resposta = "B"; // Resposta correta para Questão 2
            break;
        case 3:
            // Questão 3
            tituloQuestao.innerHTML = "Texto da Questão 3";
            buttonRespostaA.innerHTML = "Resposta A3";
            buttonRespostaB.innerHTML = "Resposta B3";
            buttonRespostaC.innerHTML = "Resposta C3";
            resposta = "C"; // Resposta correta para Questão 3
            break;
        case 4:
            // Questão 4
            tituloQuestao.innerHTML = "Texto da Questão 4";
            buttonRespostaA.innerHTML = "Resposta A4";
            buttonRespostaB.innerHTML = "Resposta B4";
            buttonRespostaC.innerHTML = "Resposta C4";
            resposta = "A"; // Resposta correta para Questão 4
            break;
        case 5:
            // Questão 5
            tituloQuestao.innerHTML = "Texto da Questão 5";
            buttonRespostaA.innerHTML = "Resposta A5";
            buttonRespostaB.innerHTML = "Resposta B5";
            buttonRespostaC.innerHTML = "Resposta C5";
            resposta = "B"; // Resposta correta para Questão 5
            break;
        case 6:
            // Questão 6
            tituloQuestao.innerHTML = "Texto da Questão 6";
            buttonRespostaA.innerHTML = "Resposta A6";
            buttonRespostaB.innerHTML = "Resposta B6";
            buttonRespostaC.innerHTML = "Resposta C6";
            resposta = "C"; // Resposta correta para Questão 6
            break;
        case 7:
            // Questão 7
            tituloQuestao.innerHTML = "Texto da Questão 7";
            buttonRespostaA.innerHTML = "Resposta A7";
            buttonRespostaB.innerHTML = "Resposta B7";
            buttonRespostaC.innerHTML = "Resposta C7";
            resposta = "A"; // Resposta correta para Questão 7
            break;
        case 8:
            // Questão 8
            tituloQuestao.innerHTML = "Texto da Questão 8";
            buttonRespostaA.innerHTML = "Resposta A8";
            buttonRespostaB.innerHTML = "Resposta B8";
            buttonRespostaC.innerHTML = "Resposta C8";
            resposta = "B"; // Resposta correta para Questão 8
            break;
        case 9:
            // Questão 9
            tituloQuestao.innerHTML = "Texto da Questão 9";
            buttonRespostaA.innerHTML = "Resposta A9";
            buttonRespostaB.innerHTML = "Resposta B9";
            buttonRespostaC.innerHTML = "Resposta C9";
            resposta = "C"; // Resposta correta para Questão 9
            break;
        case 10:
            // Questão 10
            tituloQuestao.innerHTML = "Texto da Questão 10";
            buttonRespostaA.innerHTML = "Resposta A10";
            buttonRespostaB.innerHTML = "Resposta B10";
            buttonRespostaC.innerHTML = "Resposta C10";
            resposta = "A"; // Resposta correta para Questão 10
            break;
    }

}

randomizar();