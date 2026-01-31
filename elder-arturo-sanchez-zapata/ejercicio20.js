function generarCSV(usuarios) {
    let csv = "id,nombre,email\n";

    for (let i = 0; i < usuarios.length; i++) {
        let fila = usuarios[i].id + "," + usuarios[i].nombre + "," + usuarios[i].email;
        csv += fila + (i === usuarios.length - 1 ? "" : "\n");
    }

    return csv;
}

export { generarCSV };