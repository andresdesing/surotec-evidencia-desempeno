export function ejercicio12() {
  let texto = prompt("Ingrese el texto");
  let palabrasProhibidas = ["malo", "feo", "tonto"];

  let resultado = analizarPalabras(texto, palabrasProhibidas);

  alert(JSON.stringify(resultado));
}

function analizarPalabras(texto, palabrasProhibidas) {
  let conteo = {};
  let palabrasTexto = texto.toLowerCase().split(" ");

  for (let i = 0; i < palabrasProhibidas.length; i++) {
    conteo[palabrasProhibidas[i]] = 0;
  }

  for (let i = 0; i < palabrasTexto.length; i++) {
    for (let j = 0; j < palabrasProhibidas.length; j++) {
      if (palabrasTexto[i] === palabrasProhibidas[j]) {
        conteo[palabrasProhibidas[j]]++;
      }
    }
  }

  return conteo;
}
