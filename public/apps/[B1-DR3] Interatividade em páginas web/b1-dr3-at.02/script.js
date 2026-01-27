function Carro(marca, modelo, ano) {
  this.marca = marca;
  this.modelo = modelo;
  this.ano = ano;
}

const carro1 = new Carro("Ford", "Mustang", 2023);
const carro2 = new Carro("Chevrolet", "Camaro", 2022);
const carro3 = new Carro("Dodge", "Challenger", 2021);

console.log(carro1, carro2, carro3);
