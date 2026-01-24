export function ejercicio17() {
  let cantidad = Number(prompt("Ingrese la cantidad de transacciones"))
  let transacciones = []

  for (let i = 0; i < cantidad; i++) {
    transacciones.push(Number(prompt("Ingrese el valor de la transacción")))
  }

  let sospechosas = []

  for (let i = 1; i < transacciones.length; i++) {
    let suma = 0

    for (let j = 0; j < i; j++) {
      suma += transacciones[j]
    }

    let promedio = suma / i

    if (transacciones[i] > promedio * 4) {
      sospechosas.push({
        valor: transacciones[i],
        estado: "Sospechosa"
      })
    }
  }

  return sospechosas
}
