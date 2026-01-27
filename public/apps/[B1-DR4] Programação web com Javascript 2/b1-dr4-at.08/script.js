function comparaStringCaseInsensitive(strA, strB) {
  if (strA == null || strB == null) {
    return false;
  }

  return strA.toLowerCase() === strB.toLowerCase();
}

console.log("TesTe = teste", comparaStringCaseInsensitive("TesTe", "teste"));
console.log("teste = TESTE", comparaStringCaseInsensitive("teste", "TESTE"));
console.log("T3ste = TesTe", comparaStringCaseInsensitive("T3ste", "TesTe"));
