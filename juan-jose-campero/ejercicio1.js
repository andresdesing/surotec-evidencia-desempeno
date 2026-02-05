 
 function menuCajero() { 
 console.log("Ingrese la cantidad de monto a retirar");
            const monto = Number(prompt("Ingrese cantidad: "));
            if (isNaN(monto) || monto <= 0) {
                console.log("Monto inválido.");
                return null;
            }
            return monto;

 }




function cajeroAutomatico(monto) {
    if (monto <= 0 || monto % 10000 !== 0) {
        return "Monto inválido";
    }

    let billete50k = Math.floor(monto / 50000);
    monto %= 50000;

    
    let billete20k = Math.floor(monto / 20000);
    monto %= 20000;

    let billete10k = Math.floor(monto / 10000);
    monto %= 10000;

    return {
        "50.000": billete50k,
        "20.000": billete20k,
        "10.000": billete10k
    };
}
export default cajeroAutomatico;
export { menuCajero };