
let bd_usuario = [{
    id: '1',
    name: '',
    pontuacao: ''
}]

function criar_user(name, pontuacao){

    const novoUser = {
        id: bd_usuario.length+1,
        name: name,
        pontuacao: pontuacao
    }

    bd_usuario.push(novoUser);

    return novoUser;
}

const User = localStorage.getItem('Jogador');
const Pontos = localStorage.getItem('Contador');


criar_user();