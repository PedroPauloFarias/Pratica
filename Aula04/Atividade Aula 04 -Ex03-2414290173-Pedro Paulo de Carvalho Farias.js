// Exercício 03 - Função para ordenar 3 números
// Pedro Paulo de Carvalho Farias
// 2414290173

function ordenarTres(num) {
  for (let i = 0; i < num.length - 1; i++) {
    for (let j = i + 1; j < num.length; j++) {
      if (num[i] > num[j]) {
        let temp = num[i];
        num[i] = num[j];
        num[j] = temp;
      }
    }
  }
  return num;
}
console.log(ordenarTres([3,1,2])); 