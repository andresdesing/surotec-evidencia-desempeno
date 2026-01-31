export function ejercicio4() {
    const carrito =[
        {nombre: "Laptop", categoria: "Electronica", precio: 2500000 },
        { nombre: "Celular", categoria: "Electronica", precio: 1200000 },
        { nombre: "Teclado", categoria: "Electronica", precio: 150000 },
        { nombre: "Monitor", categoria: "Electronica", precio: 800000 },
        { nombre: "Silla", categoria: "Muebles", precio: 450000 }
    ];
    const productosElectronica = carrito.filter(producto => producto.categoria === "Electronica");
    const aplicaDescuento = productosElectronica.length > 3;

    const totalGeneral = carrito.reduce((acumulado, producto) => {
        let precioFinal = producto.precio;

        if (aplicaDescuento && producto.categoria === "Electronica") {
            precioFinal = producto.precio * 0.85;
        }

        return acumulado + precioFinal;
    }, 0);

    const mensajeResumen = `Total del carrito: $${totalGeneral.toLocaleString()}`;
    alert(mensajeResumen);
    return totalGeneral;
}