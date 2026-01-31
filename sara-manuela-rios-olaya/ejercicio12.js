export function ejercicio12() {
    const textoAnalizar = "el usuario es un tonto , bruto porque no sabe usar el sistema y es un tonto";
    const palabrasProhibidas = ["tonto", "bruto"];
    
    const palabrasDelTexto = textoAnalizar.toLowerCase().split(' ');
    const reportePalabrasProhibidas = {};

    palabrasProhibidas.forEach(palabraProhibida => {
        let contadorPorPalabra = 0;

        palabrasDelTexto.forEach(palabraTexto => {
            if (palabraTexto === palabraProhibida) {
                contadorPorPalabra++;
            }
        });

        reportePalabrasProhibidas[palabraProhibida] = contadorPorPalabra;
    });

    alert(`Conteo completado: ${JSON.stringify(reportePalabrasProhibidas)}`);
    return reportePalabrasProhibidas;
}