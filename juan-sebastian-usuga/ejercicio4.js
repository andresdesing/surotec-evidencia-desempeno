export function ejercicio4() {
  let productos = [
    { categoria: "Electronica", precio: 120000 },
    { categoria: "Electronica", precio: 90000 },
    { categoria: "Electronica", precio: 150000 },
    { categoria: "Electronica", precio: 80000 },
    { categoria: "Hogar", precio: 60000 },
  ];

  let total = calcularTotal(productos);

  alert(total);
}

function calcularTotal(productos) {
  let total = 0;
  let contadorElectronica = 0;

  for (let i = 0; i < productos.length; i++) {
    if (productos[i].categoria === "Electronica") {
      contadorElectronica++;
    }
  }

  for (let i = 0; i < productos.length; i++) {
    let precio = productos[i].precio;

    if (productos[i].categoria === "Electronica" && contadorElectronica > 3) {
      precio = precio * 0.85;
    }

    total += precio;
  }

  return Math.round(total);
}
