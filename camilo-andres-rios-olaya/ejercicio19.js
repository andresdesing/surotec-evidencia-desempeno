function planificarRuta(destinos) {
    let combustible = 200
    const rutaViable = []

    for (let i = 0; i < destinos.length; i++) {
        const tramo = destinos[i]

        if (combustible >= tramo.distancia) {
            rutaViable.push(tramo)
            combustible -= tramo.distancia
        } else {
            break
        }
    }

    return rutaViable
}