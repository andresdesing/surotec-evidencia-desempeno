export const clientesPrueba = [
    { nombre: "Juan Perez", compras: [120000, 150000, 90000, 130000, 110000], fechaIngreso: "2020-05-15" },
    { nombre: "Maria Lopez", compras: [50000, 40000, 60000, 30000, 45000], fechaIngreso: "2019-11-20" },
    { nombre: "Carlos Ruiz", compras: [200000, 180000, 250000, 150000, 300000], fechaIngreso: "2024-01-10" },
    { nombre: "Ana Garcia", compras: [110000, 105000, 120000, 130000, 95000], fechaIngreso: "2021-03-25" },
    { nombre: "Luis Prado", compras: [80000, 90000, 70000, 100000, 85000], fechaIngreso: "2025-06-12" }
];

export function evaluarLealtadClientes(clientes) {
    const hoy = new Date();

    return clientes.map(cliente => {
        const fechaIngreso = new Date(cliente.fechaIngreso);
        const antiguedad = hoy.getFullYear() - fechaIngreso.getFullYear();
        
        const suma = cliente.compras.reduce((acc, c) => acc + c, 0);
        const promedio = suma / cliente.compras.length;

        const aplicaDescuento = promedio > 100000 && antiguedad > 2;

        return {
            ...cliente,
            promedio: Number(promedio.toFixed(2)),
            antiguedadAnios: antiguedad,
            resultado: aplicaDescuento ? "25% Descuento" : "Sin Descuento"
        };
    });
}