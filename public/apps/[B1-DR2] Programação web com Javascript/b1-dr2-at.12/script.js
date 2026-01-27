const caixaGrande = 40;
const caixaMedia = 30;
const caixaPequena = 20;

const docesTotais = Number(prompt("Digite a quantidade de doces:"));
let docesRestantes = docesTotais;

const numeroCaixasGrandes = Math.floor(docesRestantes / caixaGrande);
docesRestantes = docesRestantes % caixaGrande;

const numeroCaixasMedias = Math.floor(docesRestantes / caixaMedia);
docesRestantes = docesRestantes % caixaMedia;

let numeroCaixasPequenas = Math.floor(docesRestantes / caixaPequena);
docesRestantes = docesRestantes % caixaPequena;

if (docesTotais <= caixaPequena) {
  numeroCaixasPequenas = 1;
  docesRestantes = 0;
}

alert(
  "DOCES NECESSARIOS PARA TRANSPORTE\n" +
    `Caixas Grandes: ${numeroCaixasGrandes}\n` +
    `Caixas Médias: ${numeroCaixasMedias}\n` +
    `Caixas Pequenas: ${numeroCaixasPequenas}` +
    (docesRestantes > 0
      ? ` (+1 para os ${docesRestantes} doces restantes)`
      : "")
);
