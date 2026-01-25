export function ejercicio19() {
    const destinos = [
        { nombre: "Andes", distancia: 50 },
        { nombre: "San Jerónimo", distancia: 80 },
        { nombre: "Medellín", distancia: 60 },
        { nombre: "Hispania", distancia: 30 }
    ];
    let combustibleKm = 200;
    const rutaPosible = [];

    for (const destino of destinos) {
        if (combustibleKm >= destino.distancia) {
            rutaPosible.push(destino.nombre);
            combustibleKm -= destino.distancia;
        } else {
            break;
        }
    }

    alert(`Ruta: ${rutaPosible.join(" -> ")}`);
    return rutaPosible;
}