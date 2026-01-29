const advogado = {
  nome: "Nome Exemplo",
  horasTrabalhadas: 40,
  valorHora: 25,

  calcularGanho() {
    return this.horasTrabalhadas * this.valorHora;
  },
};

console.log(advogado.calcularGanho());
