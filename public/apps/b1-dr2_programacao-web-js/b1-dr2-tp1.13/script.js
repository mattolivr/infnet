let minutos = Number(prompt("Insira o número de minutos: "));

let horas = Math.trunc(minutos / 60);
if (horas > 0) {
    minutos = minutos - (horas * 60);
}

let mensagem = "";
if (horas > 0) {
    mensagem = horas + " Horas ";
    if (minutos > 0) {
        mensagem += "e ";
    }
}

if (minutos > 0) {
    mensagem += minutos + " Minutos";
}

alert(mensagem);