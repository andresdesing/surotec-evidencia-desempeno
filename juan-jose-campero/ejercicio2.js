

function insertarProductos() {
    const productos = [];

            const numeroProductos = parseInt(prompt("Ingrese el número de productos a actualizar: "));
            if (isNaN(numeroProductos) || numeroProductos <= 0) {
                console.log("Número de productos inválido.");
            
            }

            for (let i = 0; i < numeroProductos; i++) {
                const nombre = prompt(`Ingrese el nombre del producto ${i + 1}: `);
                const precio = parseFloat(prompt(`Ingrese el precio del producto ${i + 1}: `));
                const stock = parseInt(prompt(`Ingrese la cantidad del producto ${i + 1}: `));

                if (isNaN(precio) || isNaN(stock) || precio < 0 || stock < 0) {
                    console.log("Precio o cantidad inválidos.");
                    i--;
                    continue;
                }

                productos.push({ nombre, precio, stock });
            }
            return productos;
}

function actualizaInventario(productos) {
    for (let i = 0; i < productos.length; i++) {
        if (productos[i].stock < 5) {
            productos[i].precio *= 1.15;
        } else if (productos[i].stock > 20) {
            productos[i].precio *= 0.90;
        }
        
    }
    return productos;
}

export default actualizaInventario;
export { insertarProductos };