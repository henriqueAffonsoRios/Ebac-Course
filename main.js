function Automovel(marca, modelo, ano, km) {
  this.marca = marca;
  this.modelo = modelo;
  this.ano = ano;
  this.km = km;
}

function Carro(marca, modelo, ano, km, abs) {
  Automovel.call(this, marca, modelo, ano, km);
  this.abs = abs;
}

function Moto(marca, modelo, ano, km, manopla) {
  Automovel.call(this, marca, modelo, ano, km);
  this.manopla = manopla;
}

const Lancer = new Carro("mitsubishi", "Lancer", 1998, 199345, false);
const Civic = new Carro("honda", "Civic", 1995, 199780, false);
const Cb300 = new Moto("honda", "Cb300", 2009, 25000, "borracha");

console.log(Lancer);
console.log(Civic);
console.log(Cb300);
