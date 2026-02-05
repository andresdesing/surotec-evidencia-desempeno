export function ejercicio5() {
  let llegadas = ["08:05", "07:50", "08:20", "08:18", "08:00"];

  let resultado = calcularSancion(llegadas);

  alert(resultado);
}

function calcularSancion(llegadas) {
  let multaTotal = 0;
  let retrasosGraves = 0;

  for (let i = 0; i < llegadas.length; i++) {
    let partes = llegadas[i].split(":");
    let hora = Number(partes[0]);
    let minuto = Number(partes[1]);

    let minutosLlegada = hora * 60 + minuto;
    let minutosLimite = 8 * 60;

    if (minutosLlegada > minutosLimite) {
      let retraso = minutosLlegada - minutosLimite;
      multaTotal += retraso * 2;

      if (retraso > 15) {
        retrasosGraves++;
      }
    }
  }

  if (retrasosGraves > 2) {
    return "Suspendido";
  }

  return multaTotal;
}
