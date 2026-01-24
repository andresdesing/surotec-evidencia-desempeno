function calcularAsistencia(horasLlegada) {
    let totalMulta = 0;
    let retrasosGraves = 0;
    const limiteMinutos = 480;
    for (let i = 0; i < horasLlegada.length; i++) {
        const partes = horasLlegada[i].split(":");
        const minutosLlegada = (parseInt(partes[0]) * 60) + parseInt(partes[1]);
        if (minutosLlegada > limiteMinutos) {
            let minutosRetraso = minutosLlegada - limiteMinutos;
            totalMulta += minutosRetraso * 2;
            if (minutosRetraso > 15) {
                retrasosGraves++;
            }
        }
    }
    if (retrasosGraves > 2) {
        return "Suspendido";
    }
    return totalMulta;
}
export { calcularAsistencia };