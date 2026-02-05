function contarPalabrasProhibidas(texto, prohibidas) {
    const conteo = {};
    const textoMinuscula = texto.toLowerCase();

    for (let i = 0; i < prohibidas.length; i++) {
        const palabra = prohibidas[i].toLowerCase();
        const partes = textoMinuscula.split(palabra);
        conteo[palabra] = partes.length - 1;
    }

    return conteo;
}

export { contarPalabrasProhibidas };