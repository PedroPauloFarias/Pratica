// Exercício 02 - Função para ordenar 2 números
// Pedro Paulo de Carvalho Farias
// 2414290173

function ordenarDois(num) {
  if (num[0] > num[1]) {
    let temp = num[0];
    num[0] = num[1];
    num[1] = temp;
  }
  return num;
}
console.log(ordenarDois([5, 2])); 
