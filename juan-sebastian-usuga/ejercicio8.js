export function ejercicio8() {
  let puntajes = [3.5, 4.2, 5.0, 2.8, 4.7];

  let promedio = calcularPromedio(puntajes);

  alert(promedio);
}

function calcularPromedio(puntajes) {
  let mayor = puntajes[0];
  let menor = puntajes[0];
  let suma = 0;

  for (let i = 0; i < puntajes.length; i++) {
    if (puntajes[i] > mayor) {
      mayor = puntajes[i];
    }

    if (puntajes[i] < menor) {
      menor = puntajes[i];
    }

    suma += puntajes[i];
  }

  let sumaSinExtremos = suma - mayor - menor;
  let cantidad = puntajes.length - 2;

  return Number((sumaSinExtremos / cantidad).toFixed(2));
}
