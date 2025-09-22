// Soma com do...while
// Pedro Paulo de Carvalho Farias
// 2414290173

let soma = 0;
let i = 0;
const valores = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]; // exemplo
do {
  soma += valores[i];
  i++;
} while (i < 20);
console.log("Soma com do...while:", soma);
