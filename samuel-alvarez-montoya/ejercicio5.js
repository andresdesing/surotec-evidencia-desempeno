function calcularSancionAsistencia(horasLlegada) {
    
    let totalMulta = 0;
    let llegadasGraves = 0;

    for (let i = 0; i < horasLlegada.length; i++) {
        let hora = horasLlegada[i];

        let partesHora = hora.split(":");
        let horas = Number(partesHora[0]);
        let minutos = Number(partesHora[1]);

        let minutosLlegada = (horas * 60) + minutos;
        let minutosLimite = (8 * 60);

        if (minutosLlegada > minutosLimite) {
            let minutosRetraso = minutosLlegada - minutosLimite;
            totalMulta = totalMulta + (minutosRetraso * 2);

            if (minutosRetraso > 15) {
                llegadasGraves++;
            }
        }
    }

    if (llegadasGraves > 2) {
        return "Suspendido";
    }

    return totalMulta;
}
