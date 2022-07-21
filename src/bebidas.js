//data en rrouter
let bebidas = [
    {
        name: "Agua Solán de Cabras",
        price: 1.00,
        img: "$10,800",
        id: "agua-solan-de-cabras"
    },
    {
        name: "Fanta de naranja",
        price: 1.50,
        img: "$10,800",
        id: "fanta-naranja"
    }, {
        name: "Tinto de verano",
        price: 2.50,
        img: "$10,800",
        id: "tinto-de-verano"
    }, {
        name: "Cerveza Cruzcampo",
        price: 2,
        img: "$10,800",
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
