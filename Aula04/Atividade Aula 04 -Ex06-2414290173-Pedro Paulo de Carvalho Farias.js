// Exercício 06 - Bubble sort
// Pedro Paulo de Carvalho Farias
// 2414290173

function bubbleSort(arr) {
  for (let i = 0; i < arr.length -1; i++) {
    for (let j = 0; j < arr.length -1 - i; j++) {
      if (arr[j] > arr[j+1]) {
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  return arr;
}
console.log(bubbleSort([5,2,9,1,3]));
