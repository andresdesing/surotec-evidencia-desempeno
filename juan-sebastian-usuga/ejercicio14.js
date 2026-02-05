export function ejercicio14() {
  let compras = [120000, 95000, 110000, 130000, 105000];
  let antiguedad = Number(prompt("Ingrese años de antiguedad"));

  let descuento = calcularDescuento(compras, antiguedad);

  alert(descuento + "%");
}

function calcularDescuento(compras, antiguedad) {
  let suma = 0;

  for (let i = 0; i < compras.length; i++) {
    suma += compras[i];
  }

  let promedio = suma / compras.length;

  if (promedio > 100000 && antiguedad > 2) {
    return 25;
  }

  return 0;
}
