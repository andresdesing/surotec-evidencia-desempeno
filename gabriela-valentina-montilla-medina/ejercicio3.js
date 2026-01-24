export function ejercicio3() {
  let promedio = Number(prompt("Ingrese el promedio del estudiante"))
  let edad = Number(prompt("Ingrese la edad del estudiante"))
  let estrato = Number(prompt("Ingrese el estrato del estudiante"))

  if (promedio >= 4.5) {
    return true
  }

  if (edad > 18 && (estrato === 1 || estrato === 2) && promedio >= 4.0) {
    return true
  }

  return false
}
