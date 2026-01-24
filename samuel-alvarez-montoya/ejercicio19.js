function planRutaEntrega(distancias) {
    
    let combustibleDisponible = 200;
    let destinosVisitados = [];

    for (let i = 0; i < distancias.length; i++) {
        if (distancias[i] > combustibleDisponible) {
            break;
        }

        destinosVisitados.push(distancias[i]);
        combustibleDisponible -= distancias[i];
    }

    return destinosVisitados;
}
