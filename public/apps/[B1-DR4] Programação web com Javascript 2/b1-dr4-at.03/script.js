let planetas = [
  "Mercúrio",
  "Vênus",
  "Terra",
  "Marte",
  "Júpiter",
  "Terra",
  "Urano",
  "Netuno",
  "Plutão",
  "Ceres",
];

const p = planetas.splice(planetas.indexOf("Terra"), planetas.length);
console.log(p);
