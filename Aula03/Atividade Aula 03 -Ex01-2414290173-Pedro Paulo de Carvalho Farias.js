// Soma com while
// Pedro Paulo de Carvalho Farias
// 2414290173

let soma = 0;
let i = 0;
const valores = [1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5]; // exemplo
while (i < 20) {
  soma += valores[i];
  i++;
}
console.log("Soma com while:", soma);