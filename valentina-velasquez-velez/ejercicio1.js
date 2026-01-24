/*1. **Cajero de Denominaciones:** Escribe una función que reciba un monto a retirar. 
El cajero solo cuenta con billetes de $50.000, $20.000 y $10.000. Retorna un objeto con 
la cantidad mínima de billetes de cada denominación necesarios. 
Si el monto no es múltiplo de 10.000, retorna un mensaje de error.*/

function cajeroCantidadMinima(monto) {
  if (monto % 10000 !== 0) {
    return 'Error: El monto debe ser múltiplo de 10.000'
  }

  const billetes = {
    billetes50000: 0,
    billetes20000: 0,
    billetes10000: 0
  }

  billetes.billetes50000 = Math.floor(monto / 50000)
  monto %= 50000

  billetes.billetes20000 = Math.floor(monto / 20000)
  monto %= 20000

  billetes.billetes10000 = Math.floor(monto / 10000)

  return billetes
}

module.exports = cajeroCantidadMinima

// Ejemplo de uso:
