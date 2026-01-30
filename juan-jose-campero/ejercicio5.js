function horaValida(hora) {
    if (typeof hora !== "string") return false;

    const partes = hora.split(":");
    if (partes.length !== 2) return false;

    const horas = Number(partes[0]);
    const minutos = Number(partes[1]);

    if (isNaN(horas) || isNaN(minutos)) return false;
    if (horas < 0 || horas > 23) return false;
    if (minutos < 0 || minutos > 59) return false;

    return true;
}


function pedirHorasLlegada() {
    const cantidad = parseInt(prompt("Ingrese la cantidad de llegadas a registrar: "));
    const llegadas = [];

    if (isNaN(cantidad) || cantidad <= 0) {
        console.log("Cantidad inválida.");
        return llegadas;
    }

    let i = 0;
    while (i < cantidad) {
        const hora = prompt(`Ingrese la hora de llegada ${i + 1} (HH:MM): `);

        if (!horaValida(hora)) {
            console.log("Hora inválida. Use formato HH:MM (00:00 - 23:59).");
            continue;
        }

        llegadas.push(hora);
        i++;
    }

    return llegadas;
}


function calcularMulta(llegadas) {

const horaLimite = 8*60;
let totalMulta = 0;
let retrasoGrave = 0;

   for (const hora of llegadas) {
    if (typeof hora !== "string" || !hora.includes(":")) {
        return "Hora inválida en el registro";
    }

    const [horas, minutos] = hora.split(":").map(Number);

    if (isNaN(horas) || isNaN(minutos)) {
        return "Hora inválida en el registro";
    }

    const minutosLlegada = horas * 60 + minutos;

    if (minutosLlegada > horaLimite) {
        const retraso = minutosLlegada - horaLimite;
        totalMulta += retraso * 2;

        if (retraso > 15) {
            retrasoGrave++;
        }
    }
}

    if (retrasoGrave > 2) {
        return "Suspendido";
    }

    return totalMulta;
}

export default calcularMulta;
export { pedirHorasLlegada };


