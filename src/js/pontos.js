
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
    let meios = usuarios[0];
    let menor = usuarios[0];
    
    for (let i = 1; i < usuarios.length; i++) {
        if (usuarios[i].pontuacao > maior.pontuacao) {
            maior = usuarios[i];
        }
        else if ((usuarios[i].pontuacao < maior.pontuacao && usuarios[i].pontuacao > menor.pontuacao)) {
            meios = usuarios[i];
        }
        else if (usuarios[i].pontuacao < menor.pontuacao) {
            menor = usuarios[i];
        }
    }
    
    return {
        maior: maior,
        meios: meios,
        menor: menor
    };  
} 

criar_user(nome, pontos);

// criar_user('Alice', 150);
// criar_user('Bob', 200);
// criar_user('Charlie', 100);

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
