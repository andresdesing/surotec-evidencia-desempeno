export function ejercicio19() {
  let destinos = [
    { nombre: "Cali", distancia: 60 },
    { nombre: "Palmira", distancia: 50 },
    { nombre: "Buga", distancia: 120 },
    { nombre: "Tuluá", distancia: 40 }
  ];

  let ruta = planRuta(destinos);

  console.log(ruta);
}

function planRuta(destinos) {
  let combustible = 200;
  let rutaPosible = [];

  for (let destino of destinos) {
    if (destino.distancia <= combustible) {
      rutaPosible.push(destino);
      combustible -= destino.distancia;
    } else {
      break;
    }
  }

  return rutaPosible;
}
