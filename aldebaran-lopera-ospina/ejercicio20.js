
export function generarCSV(usuarios) {
    const cabecera = "id,nombre,email";
    
    const filas = usuarios.map(usuario => {
        return `${usuario.id},${usuario.nombre},${usuario.email}`;
    });

    const csvCompleto = [cabecera, ...filas].join("\n");

    return csvCompleto;
}