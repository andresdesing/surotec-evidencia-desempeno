function pedirDestinos() {
    const cantidad = parseInt(prompt("Cantidad de destinos: "));
    const destinos = [];

    for (let i = 0; i < cantidad; i++) {
        const nombre = prompt(`Nombre del destino ${i + 1}: `);
        const distancia = parseFloat(prompt(`Distancia al destino ${i + 1} (km): `));

        destinos.push({
            nombre,
            distancia
        });
    }

    return destinos;
}


function planRutaEntrega(destinos) {
    let combustible = 200;
    const visitados = [];

    for (const destino of destinos) {
        if (
            isNaN(destino.distancia) ||
            destino.distancia <= 0
        ) {
            continue;
        }

        if (destino.distancia > combustible) {
            break;
        }

        visitados.push(destino);
        combustible -= destino.distancia;
    }

    return visitados;
}


export default planRutaEntrega;
export { pedirDestinos };
