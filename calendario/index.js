// Aluno: Pedro Paulo de Carvalho Farias
// Matricula: 2414290173

/* 1 */
const meses = ["Janeiro", " Fevereiro", "Março", "Abril", "Maio","Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];

/* 2 */
const diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

/* 3 */
let calendario = [];

/* 4 */
  for (let i = 0; i < meses.length; i++) {
     let dias = [];
/* 5 */
  for (let d = 1; d <= diasPorMes[i]; d++) {
      dias.push(d); 
  }
    calendario.push(dias); 
}


console.log(" Calendário \n");

  for (let i = 0; i < calendario.length; i++) {
    console.log(`\n${meses[i]} :`);
  
  
    console.log(calendario[i].join(" "));
}


/*
                      Comentario do Codigo 

1-) Aqui eu criei um array com todos os meses do ano 
2-) Nesse eu criei outro array, mas indicando até que dia de numero esse mes vai.
Sendo o primeiro numero equivalente a primeiro nome no mes. Exemplo: Janeiro - 31
3-) Aqui eu criei uma matriz para poder fazer o calendario
4-) Pude criar uma estrutura de repetição para preencher o calendario 
5-) Essa aqui continua dentro da quatro para poder adicionar o dia e mes no calendario

*/