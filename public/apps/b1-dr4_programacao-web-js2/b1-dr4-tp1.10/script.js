const salarios = [4200, 3500, 1650, 6800, 2400];

console.log(
  Math.floor(salarios.reduce((soma, sal) => (soma += sal), 0) / salarios.length)
);
