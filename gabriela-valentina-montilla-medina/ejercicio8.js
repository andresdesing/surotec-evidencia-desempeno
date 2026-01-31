export function ejercicio8() {
  let cantidad = Number(prompt("Ingrese la cantidad de números"))
  let numeros = []

  for (let i = 0; i < cantidad; i++) {
    numeros.push(Number(prompt("Ingrese un número")))
  }

  let maximo = numeros[0]
  let minimo = numeros[0]

  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maximo) {
      maximo = numeros[i]
    }

    if (numeros[i] < minimo) {
      minimo = numeros[i]
    }
  }

  let suma = 0
  let contador = 0

  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] !== maximo && numeros[i] !== minimo) {
      suma += numeros[i]
      contador++
    }
  }

  if (contador === 0) {
    return 0
  }

  return suma / contador
}
