function pedirUsuarios() {
    const cantidad = parseInt(prompt("¿Cuántos usuarios desea registrar?"));
    const usuarios = [];

    for (let i = 0; i < cantidad; i++) {
        const id = prompt(`ID del usuario ${i + 1}:`);
        const nombre = prompt(`Nombre del usuario ${i + 1}:`);
        const email = prompt(`Email del usuario ${i + 1}:`);

        usuarios.push({ id, nombre, email });
    }

    return usuarios;
}

function generarCSV(usuarios) {
    if (!Array.isArray(usuarios) || usuarios.length === 0) {
        return "";
    }

    const encabezados = Object.keys(usuarios[0]).join(",");
    const filas = [];

    for (const usuario of usuarios) {
        const valores = Object.values(usuario)
        .join(",")
        .map(v => `"${v}"`);
        filas.push(valores);
    }

    return encabezados + "\n" + filas.join("\n");
}


export default generarCSV;
export { pedirUsuarios };