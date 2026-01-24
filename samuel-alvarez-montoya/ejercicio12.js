function contarPalabrasProhibidas(texto, palabrasProhibidas) {
    
    let resultado = {};
    let palabrasTexto = texto.toLowerCase().split(" ");

    for (let i = 0; i < palabrasProhibidas.length; i++) {
        let palabra = palabrasProhibidas[i].toLowerCase();
        let contador = 0;

        for (let j = 0; j < palabrasTexto.length; j++) {
            if (palabrasTexto[j] === palabra) {
                contador++;
            }
        }

        resultado[palabra] = contador;
    }

    return resultado;
}
