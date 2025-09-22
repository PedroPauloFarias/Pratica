// Exercício 09 - Fatorial
// Pedro Paulo de Carvalho Farias
// 2414290173

let nFat = 5; 
let fat = [1]; 
for (let i = 1; i <= nFat; i++) {
  fat[i] = i * fat[i-1];
}
console.log("Fatorial:", fat);
