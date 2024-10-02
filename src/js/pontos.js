const nome = localStorage.getItem('Jogador');
const pontos = localStorage.getItem('Contador');
const valor = localStorage.getItem('Valor');

document.getElementById('pontos1').textContent = pontos;
document.getElementById('pontos2').textContent = valor;
document.getElementById('usuarioExibir').textContent = nome;

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

criar_user(nome, pontos);

console.log(usuarios);

