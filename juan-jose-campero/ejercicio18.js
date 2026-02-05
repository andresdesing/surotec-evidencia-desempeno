function pedirPrestamos() {
    const cantidad = parseInt(prompt("Cantidad de préstamos actuales: "));
    const prestamos = [];

    for (let i = 0; i < cantidad; i++) {
        const diasRetraso = parseInt(prompt(`Días de retraso del préstamo ${i + 1}: `));
        const multa = parseFloat(prompt(`Multa del préstamo ${i + 1}: `));

        prestamos.push({
            diasRetraso,
            multa
        });
    }

    return prestamos;
}


function validarPrestamoBiblioteca(prestamos) {
    let multaTotal = 0;

    for (const prestamo of prestamos) {
        if (
            isNaN(prestamo.diasRetraso) ||
            isNaN(prestamo.multa) ||
            prestamo.diasRetraso < 0 ||
            prestamo.multa < 0
        ) {
            return "Datos inválidos";
        }

        if (prestamo.diasRetraso > 10) {
            return "Préstamo Denegado";
        }

        multaTotal += prestamo.multa;
    }

    if (multaTotal > 10000) {
        return "Préstamo Denegado";
    }

    return "Préstamo Aprobado";
}


export default validarPrestamoBiblioteca;
export { pedirPrestamos };