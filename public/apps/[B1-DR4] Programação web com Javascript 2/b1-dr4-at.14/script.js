/**
 * Vantagens de utilizar o bloco try..catch
 * 
 * 1. O sistema não tem a sua execução interrompida por um erro inesperado. Ao utilizar o bloco, é possível prever
 * falhas e tratá-las da forma mais adequada.
 * 
 * 2. Permite uma tratativa diferente para possíveis erros, fazendo com que o programa não espere apenas
 * que as coisas deêm certo, permitindo uma tratativa diferente para erros de conexão por exemplo.

 */

try {
  const carro = { marca: "fiat", modelo: "uno" };
  console.log(carro.cor.toUpperCase());
} catch (e) {
  alert("Não é possível encontrar a cor do carro");
}
