function planificarRuta(destinos) {
    let combustible = 200;
    let rutaPosible = [];

    for (let i = 0; i < destinos.length; i++) {
        if (combustible >= destinos[i].distancia) {
            combustible -= destinos[i].distancia;
            rutaPosible.push(destinos[i].nombre);
        } else {
            break;
        }
    }

    return rutaPosible;
}

export { planificarRuta };