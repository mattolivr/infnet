function validarCPF(cpf) {
  if (
    cpf.length !== 14 ||
    cpf[3] !== "." ||
    cpf[7] !== "." ||
    cpf[11] !== "-"
  ) {
    return false;
  }

  for (const num of cpf.replaceAll(".", "").replaceAll("-", "")) {
    if (isNaN(num)) {
      return false;
    }
  }

  return true;
}

console.log("908.111.432-87", validarCPF("908.111.432-87"));
console.log("754.349.321-54", validarCPF("754.349.321-54"));
console.log("a23.456.789-10", validarCPF("a23.456.789-10"));
