export function analizarPalabrasProhibidas(texto, prohibidas) {
    const conteoDetallado = {};
    const palabrasLimpias = texto.toLowerCase().replace(/[.,!?;:]/g, "").split(/\s+/);

    prohibidas.forEach(palabraProhibida => {
        const objetivo = palabraProhibida.toLowerCase();
        const repeticiones = palabrasLimpias.filter(p => p === objetivo).length;
        
        conteoDetallado[palabraProhibida] = repeticiones;
    });

    return conteoDetallado;
}