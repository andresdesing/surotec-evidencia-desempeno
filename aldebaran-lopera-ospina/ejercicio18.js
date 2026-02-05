
export function verificarPrestamo(prestamos) {
    const hoy = new Date();
    let totalMultas = 0;
    
    const LIMITE_DIAS = 10;
    const LIMITE_DINERO = 10000;

    for (let prestamo of prestamos) {
        totalMultas += prestamo.multa;

        const fechaDevolucion = new Date(prestamo.fechaDevolucion);
        
        const diferenciaTiempo = hoy - fechaDevolucion;
        
        const diasRetraso = Math.ceil(diferenciaTiempo / (1000 * 60 * 60 * 24));

        if (diasRetraso > LIMITE_DIAS) {
            return {
                puedePrestar: false,
                mensaje: `Préstamo DENEGADO.\nEl libro con fecha ${prestamo.fechaDevolucion} tiene ${diasRetraso} días de retraso (Máximo permitido: ${LIMITE_DIAS}).`
            };
        }
    }

    if (totalMultas > LIMITE_DINERO) {
        return {
            puedePrestar: false,
            mensaje: `Préstamo DENEGADO.\nLa multa acumulada es de $${totalMultas} (Máximo permitido: $${LIMITE_DINERO}).`
        };
    }

    return {
        puedePrestar: true,
        mensaje: "Préstamo APROBADO. El usuario está al día."
    };
}