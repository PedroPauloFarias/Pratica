// Exercício 05 - Array com tamanho variável
// Pedro Paulo de Carvalho Farias
// 2414290173

let tamanho = 5; 
let array5 = [];
for (let i = 0; i < tamanho; i++) {
  array5.push(i+1); 
}
console.log("Array original:", array5);
let invertido = [];
for (let i = array5.length -1; i >=0; i--) {
  invertido.push(array5[i]);
}
console.log("Array invertido:", invertido);
