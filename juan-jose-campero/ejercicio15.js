function pedirTareas() {
    let cantidad;
    do {
        cantidad = parseInt(prompt("Cantidad de tareas: "));
    } while (isNaN(cantidad) || cantidad < 0);

    const tareas = [];

    for (let i = 0; i < cantidad; i++) {
        const descripcion = prompt(`Descripción tarea ${i + 1}: `);

        let prioridad;
        do {
            prioridad = prompt("Prioridad (alta, media, baja): ").toLowerCase();
        } while (!["alta", "media", "baja"].includes(prioridad));

        let diasVencimiento;
        do {
            diasVencimiento = parseInt(prompt("Días para vencimiento: "));
        } while (isNaN(diasVencimiento) || diasVencimiento < 0);

        tareas.push({
            descripcion,
            prioridad,
            diasVencimiento
        });
    }

    return tareas;
}

function filtrarTareasUrgentes(tareas) {
    const urgentes = [];

    for (const tarea of tareas) {
        if (tarea.prioridad === "alta" && tarea.diasVencimiento < 2) {
            urgentes.push(tarea);
        }
    }

    return urgentes;
}

export default filtrarTareasUrgentes;
export { pedirTareas };