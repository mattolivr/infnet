const valorTotal = Number(prompt("Insira o valor total da compra"));
const pgtoCodigo = Number(prompt("1. Dinheiro \n2. Débito \n3. Crédito"));

let pgtoNome = "dinheiro";
let parcelas = 1;

if (pgtoCodigo === 2 || pgtoCodigo === 3) {
  pgtoNome = pgtoCodigo === 2 ? "débito" : "crédito";

  parcelas = Number(
    prompt("Insira o número de parcelas (1 para pagamento à vista)")
  );
}

let desconto = 0;
if (parcelas === 1) {
  if (pgtoCodigo === 1) {
    desconto = 10;
  }

  if (pgtoCodigo === 2) {
    desconto = 8;
  }

  if (pgtoCodigo === 3) {
    desconto = 5;
  }
} else {
  if (pgtoCodigo === 2 && parcelas > 3) {
    desconto = 4;
  }
}

const valorLiquido = valorTotal * (1 - desconto / 100);

let mensagem = `Pagamento de R$ ${valorLiquido} a ${
  parcelas === 1 ? "vista" : "prazo"
} no ${pgtoNome}\n`;

if (desconto > 0) {
  mensagem += `Desconto de ${desconto}%\n`;
}

if (parcelas > 1) {
  const valorParcelas = valorLiquido / parcelas;
  mensagem += `${parcelas} parcelas de R$ ${valorParcelas}`;
}

alert(mensagem);
