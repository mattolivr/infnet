const dia = Number(prompt("Informe o dia atual (dd):"));
const mes = Number(prompt("Informe o número do mês atual (1 - 12):"));

const dataEntrada = new Date();
dataEntrada.setMonth(mes - 1);
dataEntrada.setDate(dia);

const proximoAnoNovo = new Date(dataEntrada.getFullYear() + 1, 0, 1, 0, 0, 0);

const diferenca = Math.floor((proximoAnoNovo - dataEntrada) / 1000);

const segundosPorDia = 60 * 60 * 24;
const segundosPorHora = 60 * 60;
const segundosPorMinuto = 60;

const dias = Math.floor(diferenca / segundosPorDia);
let restoSegundos = diferenca % segundosPorDia;

const horas = Math.floor(restoSegundos / segundosPorHora);
restoSegundos = restoSegundos % segundosPorHora;

const minutos = Math.floor(restoSegundos / segundosPorMinuto);

alert(`A partir de ${dia}/${mes}/${dataEntrada.getFullYear()}, faltam:
${dias} dias, ${horas} horas e ${minutos} minutos para o Ano Novo`);
