export function ejercicio18() {
  let prestamos = [
    { diasRetraso: 5, multa: 2000 },
    { diasRetraso: 12, multa: 3000 }
  ];

  let puedePrestar = validarPrestamo(prestamos);

  console.log(puedePrestar ? "Préstamo permitido" : "Préstamo denegado");
}

function validarPrestamo(prestamos) {
  let multaTotal = 0;

  for (let prestamo of prestamos) {
    multaTotal += prestamo.multa;

    if (prestamo.diasRetraso > 10) {
      return false;
    }
  }

  if (multaTotal > 10000) {
    return false;
  }

  return true;
}
