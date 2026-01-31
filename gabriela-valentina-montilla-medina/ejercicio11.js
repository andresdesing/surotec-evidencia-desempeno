export function ejercicio11() {
  let capacidad = Number(prompt("Ingrese la capacidad del aula"))
  let cantidadGrupos = Number(prompt("Ingrese la cantidad de grupos"))
  let grupos = []

  for (let i = 0; i < cantidadGrupos; i++) {
    grupos.push(Number(prompt("Ingrese la cantidad de estudiantes del grupo")))
  }

  let ocupados = 0
  let fuera = 0
  let lleno = false

  for (let i = 0; i < grupos.length; i++) {
    if (!lleno && ocupados + grupos[i] <= capacidad) {
      ocupados += grupos[i]
    } else {
      lleno = true
      fuera += grupos[i]
    }
  }

  return fuera
}
