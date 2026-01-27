const fibonacci = [0, 1];

while (fibonacci[fibonacci.length - 1] < 55) {
  const proximo =
    fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
  fibonacci.push(proximo);
}

console.log(fibonacci);
