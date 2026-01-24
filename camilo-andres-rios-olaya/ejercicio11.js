function calcularCapacidadAula(capacidad, grupos) {
    let estudiantesFuera = 0
    let capacidadRestante = capacidad
    let ingresoPermitido = true

    for (let i = 0; i < grupos.length; i++) {
        const grupo = grupos[i]

        if (ingresoPermitido && grupo <= capacidadRestante) {
            capacidadRestante -= grupo
        } else {
            ingresoPermitido = false
            estudiantesFuera += grupo
        }
    }

    return estudiantesFuera
}