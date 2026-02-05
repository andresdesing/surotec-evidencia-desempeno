export function ejercicio15() {
  let cantidad = Number(prompt("Ingrese la cantidad de tareas"))
  let tareas = []

  for (let i = 0; i < cantidad; i++) {
    let descripcion = prompt("Ingrese la descripcion")
    let prioridad = prompt("Ingrese la prioridad (alta, media, baja)")
    let dias = Number(prompt("Ingrese los dias para vencimiento"))

    tareas.push({
      descripcion: descripcion,
      prioridad: prioridad.toLowerCase(), 
      dias: dias
    })
  }

  let urgentes = []

  for (let i = 0; i < tareas.length; i++) {
    if (tareas[i].prioridad === "alta" && tareas[i].dias < 2) {
      urgentes.push(tareas[i])
    }
  }

  return urgentes
}
