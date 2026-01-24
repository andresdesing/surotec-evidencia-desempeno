export const carritoPrueba = [
    { nombre: "Celular", categoria: "Electronica", precio: 1000 },
    { nombre: "Tablet", categoria: "Electronica", precio: 500 },
    { nombre: "Audífonos", categoria: "Electronica", precio: 200 },
    { nombre: "Cargador", categoria: "Electronica", precio: 100 },
    { nombre: "Libro", categoria: "Otros", precio: 50 }
];

export function calcularTotalCarrito(productos) {
    const productosElectronica = productos.filter(p => p.categoria === 'Electronica');
    const aplicaDescuento = productosElectronica.length > 3;

    const total = productos.reduce((acumulado, producto) => {
        let precioFinal = producto.precio;
        if (aplicaDescuento && producto.categoria === 'Electronica') {
            precioFinal = producto.precio * 0.85;
        }
        return acumulado + precioFinal;
    }, 0);

    return Number(total.toFixed(2));
}