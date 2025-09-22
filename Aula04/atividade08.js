// Exercício 08 - Fibonacci
// Pedro Paulo de Carvalho Farias
// 2414290173

let nFib = 10; 
let fib = [0,1];
for (let i = 2; i < nFib; i++) {
  fib[i] = fib[i-1] + fib[i-2];
}
console.log("Fibonacci:", fib);
