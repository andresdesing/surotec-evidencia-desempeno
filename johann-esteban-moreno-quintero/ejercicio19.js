export const rutaPrueba = [
    { destino: "Medellín", distancia: 50 },
    { destino: "Rionegro", distancia: 160 },
    { destino: "Bello", distancia: 20 },
    { destino: "Envigado", distancia: 30 }
];

export function planificarRutaEficiente(destinos) {
    let combustible = 200;
    const alcanzados = [];
    const noAlcanzados = [];
    let kmRecorridos = 0;

    const destinosOrdenados = [...destinos].sort((a, b) => a.distancia - b.distancia);

    destinosOrdenados.forEach((tramo) => {
        if (combustible >= tramo.distancia) {
            combustible -= tramo.distancia;
            kmRecorridos += tramo.distancia;
            alcanzados.push({
                nombre: tramo.destino,
                distancia: tramo.distancia,
                combustibleRestante: combustible
            });
        } else {
            noAlcanzados.push({
                nombre: tramo.destino,
                distanciaRequerida: tramo.distancia
            });
        }
    });

    return {
        alcanzados,
        noAlcanzados,
        resumen: {
            totalKm: kmRecorridos,
            sobrante: combustible,
            cantidadAlcanzados: alcanzados.length
        }
    };
}