let contador = 0;

while (true) {
  const aleatorio = Math.floor(Math.random() * 100) + 1;
  console.log(contador, aleatorio);

  if (aleatorio <= 10) {
    break;
  }

  if (aleatorio <= 75) {
    contador++;
  }
}
