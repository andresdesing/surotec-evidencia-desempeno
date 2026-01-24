function monitorearSensores(temperaturas) {
    let contadorConsecutivos = 0

    for (let i = 0; i < temperaturas.length; i++) {
        if (temperaturas[i] > 35) {
            contadorConsecutivos++
            if (contadorConsecutivos === 3) {
                return "Alarma: Sobrecalentamiento"
            }
        } else {
            contadorConsecutivos = 0
        }
    }

    return "Estado Normal"
}