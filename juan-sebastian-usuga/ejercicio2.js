export function ejercicio2() {
  let productos = [
    { nombre: "Arroz", stock: 3, precio: 2500 },
    { nombre: "Azucar", stock: 10, precio: 1800 },
    { nombre: "Cafe", stock: 25, precio: 4200 },
  ];

  let productosActualizados = actualizarPrecios(productos);

  alert(JSON.stringify(productosActualizados));
}

function actualizarPrecios(productos) {
  let resultado = [];

  for (let i = 0; i < productos.length; i++) {
    let producto = productos[i];
    let nuevoPrecio = producto.precio;

    if (producto.stock < 5) {
      nuevoPrecio = producto.precio * 1.15;
    } else if (producto.stock > 20) {
      nuevoPrecio = producto.precio * 0.9;
    }

    resultado.push({
      nombre: producto.nombre,
      stock: producto.stock,
      precio: Math.round(nuevoPrecio),
    });
  }

  return resultado;
}
