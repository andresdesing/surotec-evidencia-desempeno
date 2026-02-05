export function ejercicio12() {
  let texto = prompt("Ingrese el texto").toLowerCase()
  let cantidadPalabras = Number(prompt("Ingrese la cantidad de palabras prohibidas"))
  let palabrasProhibidas = []

  for (let i = 0; i < cantidadPalabras; i++) {
    palabrasProhibidas.push(prompt("Ingrese palabra prohibida").toLowerCase())
  }

  let resultado = {}

  for (let i = 0; i < palabrasProhibidas.length; i++) {
    resultado[palabrasProhibidas[i]] = 0
  }

  let palabrasTexto = texto.split(" ")

  for (let i = 0; i < palabrasTexto.length; i++) {
    if (resultado.hasOwnProperty(palabrasTexto[i])) {
      resultado[palabrasTexto[i]]++
    }
  }

  return resultado
}
