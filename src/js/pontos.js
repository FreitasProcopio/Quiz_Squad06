const nome = localStorage.getItem('Jogador');
const pontos = localStorage.getItem('Contador');
const valor = localStorage.getItem('Valor');

document.getElementById('pontos1').textContent = pontos;
document.getElementById('pontos2').textContent = valor;
// document.getElementById('pontos3').textContent = pontos;
document.getElementById('usuarioExibir').textContent = nome;