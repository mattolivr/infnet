let contador = 0;

while (true) {
  if (Math.floor(Math.random() * 10) + 1 === 1) {
    break;
  }

  console.log(++contador);
}
