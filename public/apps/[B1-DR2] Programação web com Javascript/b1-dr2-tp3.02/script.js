const pesoMaximoRegulamento = 50;
const pesoLido = Number(prompt("Insira o pelo em KG do peixe"));
const pesoExcedido =
  pesoLido > pesoMaximoRegulamento ? pesoLido - pesoMaximoRegulamento : 0;

if (pesoExcedido > 0) {
  const multa = 4 * pesoExcedido;
  alert(`Você deve pagar uma multa de R$ ${multa},00`);
} else {
  alert("Peso dentro da conformidade, sem necessidade de multa.");
}

// Se peso recebido > maximo, RS4 por quilo excedente
