export function ejercicio15() {
  let tareas = [
    { descripcion: "Entregar informe", prioridad: "alta", dias: 1 },
    { descripcion: "Responder correos", prioridad: "media", dias: 1 },
    { descripcion: "Pagar factura", prioridad: "alta", dias: 3 },
    { descripcion: "Preparar exposicion", prioridad: "alta", dias: 0 },
  ];

  let tareasUrgentes = filtrarTareasUrgentes(tareas);

  alert(JSON.stringify(tareasUrgentes));
}

function filtrarTareasUrgentes(tareas) {
  let resultado = [];

  for (let i = 0; i < tareas.length; i++) {
    if (
      tareas[i].prioridad === "alta" &&
      tareas[i].dias < 2
    ) {
      resultado.push(tareas[i]);
    }
  }

  return resultado;
}
