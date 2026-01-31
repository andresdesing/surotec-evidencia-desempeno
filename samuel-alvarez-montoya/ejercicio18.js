export function validarPrestamoBiblioteca(prestamos) {
    
    let multaTotal = 0;

    for (let i = 0; i < prestamos.length; i++) {
        if (prestamos[i].diasRetraso > 10) {
            return "Prestamo Denegado";
        }

        multaTotal += prestamos[i].multa;

        if (multaTotal > 10000) {
            return "Prestamo Denegado";
        }
    }

    return "Prestamo Aprobado";
}
