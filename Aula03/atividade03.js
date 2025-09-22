// Exercício 03 - Lanchonete
// Pedro Paulo de Carvalho Farias
// 2414290173

const menu = {100:1.7, 101:2.3, 102:2.6, 103:2.4, 104:2.5, 105:1.0};
const pedidos = [
  {codigo:100, qtd:2},
  {codigo:103, qtd:1},
  {codigo:105, qtd:3},
  {codigo:0, qtd:0} // 0 finaliza
];
let total = 0;
let i = 0;
while (i < pedidos.length) {
  let p = pedidos[i];
  if (p.codigo === 0) break;
  total += menu[p.codigo] * p.qtd;
  i++;
}
console.log("Valor final a pagar:", total.toFixed(2));
