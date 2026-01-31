export function ejercicio1() {
    const monto = prompt("Ingrese el monto a retirar (múltiplos de $10.000):");
    const cantidad = parseInt(monto);

    if (isNaN(cantidad) || cantidad % 10000 !== 0) {
        const error = "El monto a retirar debe ser múltiplo de 10.000.";
        alert(error);
        return error;
    }

    const billeteCincuenta = Math.floor(cantidad / 50000);
    let restante = cantidad % 50000; 

    const billeteVeinte = Math.floor(restante / 20000);
    restante = restante % 20000;

    const billeteDiez = Math.floor(restante / 10000);

    let mensajeResultado = `Para un retiro de $${cantidad}, se entrega:\n`;

    if (billeteCincuenta > 0) {
        mensajeResultado += `- ${billeteCincuenta} billete(s) de $50.000\n`;
    }
    if (billeteVeinte > 0) {
        mensajeResultado += `- ${billeteVeinte} billete(s) de $20.000\n`;
    }
    if (billeteDiez > 0) {
        mensajeResultado += `- ${billeteDiez} billete(s) de $10.000\n`;
    }

    alert(mensajeResultado);
    return mensajeResultado;
}