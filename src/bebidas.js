//data en rrouter
import solan from './assets/solan.jpg'
import fanta from './assets/fanta.jpg'
import tinto from './assets/tinto.jpg'

let bebidas = [
    {
        name: "Agua Solán de Cabras",
        price: 1.00,
        img: solan,
        id: "agua-solan-de-cabras"
    },
    {
        name: "Fanta de naranja",
        price: 1.50,
        img: fanta,
        id: "fanta-naranja"
    }, {
        name: "Tinto de verano",
        price: 2.50,
        img: tinto,
        id: "tinto-de-verano"
    }, {
        name: "Cerveza Cruzcampo",
        price: 2,
        img: tinto,
        id: "cerveza-cruzcampo"
    }
];

export function getBebidas() {
    return bebidas;
}

export function getBebida(id) {
    return bebidas.find(
      (bebida) => bebida.id === id
    );
  }
