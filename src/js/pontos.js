
const nome = localStorage.getItem('Jogador');
const pontos = localStorage.getItem('Contador');

function criar_user(name, pontuacao){

    let usuarios = JSON.parse(localStorage.getItem('BD')) || [];

    const novoUser = {
        id: usuarios.length+1,
        name: name,
        pontuacao: pontuacao
    }
  
    usuarios.push(novoUser);

    localStorage.setItem('BD',JSON.stringify(usuarios));

    return novoUser;
}

function compararPontuacao() {

    let usuarios = JSON.parse(localStorage.getItem('BD')) || [];
 

    if (usuarios.length === 0) {
        return "Não há usuários cadastrados.";
    }

    let maior = usuarios[0];
    let menor = usuarios[0];
    let meios = null; // Iniciar como null

    for (let i = 1; i < usuarios.length; i++) {
        if (usuarios[i].pontuacao > maior.pontuacao) {
            meios = maior; // Atualiza "meios" antes de mudar "maior"
            maior = usuarios[i];
        } else if (usuarios[i].pontuacao < menor.pontuacao) {
            meios = menor; // Atualiza "meios" antes de mudar "menor"
            menor = usuarios[i];
        } else if (usuarios[i].pontuacao > menor.pontuacao && (meios === null || usuarios[i].pontuacao < meios.pontuacao)) {
            meios = usuarios[i]; // Atualiza "meios" se for uma pontuação intermediária
        }
    }

    return {
        maior: maior,
        meios: meios,
        menor: menor
    };
}

criar_user(nome, pontos);

const resultado = compararPontuacao();

console.log('Maior pontuação:', resultado.maior);
console.log('Meia pontuação:', resultado.meios);
console.log('Menor pontuação:', resultado.menor);

const primeiro = resultado.maior.name + ' - ' + resultado.maior.pontuacao;
const segundo = resultado.meios.name + ' - ' + resultado.meios.pontuacao;
const terceiro = resultado.menor.name + ' - ' + resultado.menor.pontuacao;

document.getElementById('jogador_um').textContent = primeiro;
document.getElementById('jogador_dois').textContent = segundo;
document.getElementById('jogador_tres').textContent = terceiro;
