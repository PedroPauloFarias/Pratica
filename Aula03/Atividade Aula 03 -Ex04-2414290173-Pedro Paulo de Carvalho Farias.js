//Cobaias
// Pedro Paulo de Carvalho Farias
// 2414290173

const experimentos = [
  {qtd:5, tipo:1},{qtd:3, tipo:2},{qtd:2, tipo:1},{qtd:4, tipo:2},{qtd:1, tipo:1},
  {qtd:2, tipo:2},{qtd:3, tipo:1},{qtd:1, tipo:2},{qtd:2, tipo:1},{qtd:1, tipo:2},
  {qtd:2, tipo:1},{qtd:1, tipo:2},{qtd:1, tipo:1},{qtd:2, tipo:2},{qtd:1, tipo:1}
];
let total = 0, coelhos = 0, ratos = 0;
for (let i = 0; i < experimentos.length; i++) {
  total += experimentos[i].qtd;
  if (experimentos[i].tipo === 1) coelhos += experimentos[i].qtd;
  else ratos += experimentos[i].qtd;
}
console.log("Total cobaias:", total);
console.log("Coelhos:", coelhos);
console.log("Ratos:", ratos);
console.log("Percentual Coelhos:", ((coelhos/total)*100).toFixed(2), "%");
console.log("Percentual Ratos:", ((ratos/total)*100).toFixed(2), "%");
