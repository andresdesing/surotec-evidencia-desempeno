
export function controlAsistencia(asistencias) {
    let totalMulta = 0;
    let llegadasTardeGraves = 0;

    for (let hora of asistencias) {

        const [hh, mm] = hora.split(':').map(Number);

        const minutosLlegada = (hh * 60) + mm;
        const minutosLimite = (8 * 60);

        const retraso = minutosLlegada - minutosLimite;

        if (retraso > 0) {
            totalMulta += retraso * 2;

            if (retraso > 15) {
                llegadasTardeGraves++;
            }
        }
    }


    if (llegadasTardeGraves > 2) {
        return "Suspendido";
    }

    return totalMulta;
}
