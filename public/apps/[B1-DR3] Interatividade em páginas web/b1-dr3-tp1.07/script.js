const nomeColegio = "Instituto Exemplo";
const anoFundacaoColegio = 1920;

const colegio = {
  nome: nomeColegio,
  "ano de fundação": anoFundacaoColegio,
  nomeDiretor: "Fulano D'Tal",
  numeroAlunos: 500,
  telefone: "(12) 3456-7890",

  obterDiretor() {
    return this.nomeDiretor;
  },
};

delete colegio["ano de fundação"];

console.log(colegio.obterDiretor());
