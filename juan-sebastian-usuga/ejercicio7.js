export function ejercicio7() {
  let contrasena = prompt("Ingrese la contraseña");

  let resultado = validarContrasena(contrasena);

  alert(resultado);
}

function validarContrasena(contrasena) {
  if (contrasena.length < 8) {
    return "Insegura";
  }

  let tieneNumero = false;
  let tieneEspecial = false;

  for (let i = 0; i < contrasena.length; i++) {
    let codigo = contrasena.charCodeAt(i);

    if (codigo >= 48 && codigo <= 57) {
      tieneNumero = true;
    } else if (
      !(codigo >= 65 && codigo <= 90) &&
      !(codigo >= 97 && codigo <= 122)
    ) {
      tieneEspecial = true;
    }
  }

  if (tieneNumero && tieneEspecial) {
    return "Segura";
  }

  return "Insegura";
}
