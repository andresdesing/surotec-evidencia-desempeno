export function ejercicio18() {
  let cantidad = Number(prompt("Ingrese la cantidad de préstamos actuales"))
  let prestamos = []

  for (let i = 0; i < cantidad; i++) {
    let diasRetraso = Number(prompt("Ingrese los días de retraso del libro"))
    let multa = Number(prompt("Ingrese la multa del libro"))

    prestamos.push({
      diasRetraso: diasRetraso,
      multa: multa
    })
  }

  let multaTotal = 0

  for (let i = 0; i < prestamos.length; i++) {
    multaTotal += prestamos[i].multa

    if (prestamos[i].diasRetraso > 10) {
      return "Préstamo denegado"
    }
  }

  if (multaTotal > 10000) {
    return "Préstamo denegado"
  }

  return "Préstamo aprobado"
}
