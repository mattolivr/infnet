const carro = {
  marca: "Honda",
  modelo: "Civic",
  ano: 2023,

  mostrarDetalhes() {
    console.log("Marca: " + this.marca);
    console.log("Modelo: " + this.modelo);
    console.log("Ano: " + this.ano);
  },
  ligar() {
    console.log("O carro está ligado!");
  },
};

carro.mostrarDetalhes();
carro.ligar();
