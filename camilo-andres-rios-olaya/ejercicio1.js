function cajeroDenominaciones(monto) {
    if (monto % 10000 !== 0) {
        return "Error: El monto debe ser múltiplo de 10.000"
    }

    let restante = monto
    
    const billetes50 = Math.floor(restante / 50000)
    restante = restante % 50000

    const billetes20 = Math.floor(restante / 20000)
    restante = restante % 20000

    const billetes10 = Math.floor(restante / 10000)
    
    return {
        billetesDe50000: billetes50,
        billetesDe20000: billetes20,
        billetesDe10000: billetes10
    }
}