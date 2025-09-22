// Exercício 07 - Encontrar índices
// Pedro Paulo de Carvalho Farias
// 2414290173

function todosIndices(arr, num) {
  let indices = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) indices.push(i);
  }
  return indices;
}
console.log(todosIndices([1,2,3,2,4,2],2));
