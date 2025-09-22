// Exercício 10 - Jogo da Velha simples
// Pedro Paulo de Carvalho Farias
// 2414290173

let tabuleiro = [
  ["","",""],
  ["","",""],
  ["","",""]
];

tabuleiro[0][0] = "X";
tabuleiro[1][1] = "O";
tabuleiro[0][2] = "X";
console.log("Tabuleiro atual:");
for (let i = 0; i < 3; i++) {
  console.log(tabuleiro[i]);
}