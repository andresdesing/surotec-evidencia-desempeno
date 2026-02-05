export function ejercicio16() {
  let consumo = 40;   // metros cubicos
  let estrato = 1;

  let total = calcularServicio(consumo, estrato);

  alert(`Valor a pagar: $${total}`);
}

function calcularServicio(consumo, estrato) {
  let total = 0;

  // Primer rango
  if (consumo > 0) {
    let primerRango = Math.min(consumo, 15);
    total += primerRango * 1000;
  }

  // Segundo rango
  if (consumo > 15) {
    let segundoRango = Math.min(consumo - 15, 15);
    total += segundoRango * 1500;
  }

  // Tercer rango
  if (consumo > 30) {
    let tercerRango = consumo - 30;
    total += tercerRango * 2500;
  }

  // Subsidio estrato 1
  if (estrato === 1) {
    total *= 0.8;
  }

  return total;
}
