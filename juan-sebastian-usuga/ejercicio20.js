export function ejercicio20() {
  let usuarios = [
    { id: 1, nombre: "Ana", email: "ana@mail.com" },
    { id: 2, nombre: "Carlos", email: "carlos@mail.com" },
    { id: 3, nombre: "Luisa", email: "luisa@mail.com" }
  ];

  let csv = generarCSV(usuarios);
  console.log(csv);
}

function generarCSV(usuarios) {
  let resultado = "id,nombre,email\n";

  for (let usuario of usuarios) {
    resultado +=
      usuario.id + "," +
      usuario.nombre + "," +
      usuario.email + "\n";
  }

  return resultado;
}
