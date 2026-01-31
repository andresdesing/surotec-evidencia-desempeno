export function ejercicio13() {
  let cantidad = Number(prompt("Ingrese la cantidad de mediciones"))
  let temperaturas = []

  for (let i = 0; i < cantidad; i++) {
    temperaturas.push(Number(prompt("Ingrese la temperatura")))
  }

  let consecutivas = 0

  for (let i = 0; i < temperaturas.length; i++) {
    if (temperaturas[i] > 35) {
      consecutivas++
      if (consecutivas === 3) {
        return "Alarma: Sobrecalentamiento"
      }
    } else {
      consecutivas = 0
    }
  }

  return "Estado Normal"
}
