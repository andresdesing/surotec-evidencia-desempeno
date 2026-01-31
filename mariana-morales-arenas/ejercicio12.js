function analisispalabrasProhibidas(texto, prohibidas){
    let resultado ={};

    for(let palabra of prohibidas){
        resultado[palabra] = 0;
    }
    let palabrasTexto = texto.toLowerCase().split(/\s+/);
    for (let palabra of palabrasTexto){
        if (resultado.hasOwnProperty(palabra)){
            resultado[palabra]++;
        }
    }
    return resultado;

}
module.exports = analisispalabrasProhibidas;