function controlAsistencia(horasLlegada){
    let multaTotal = 0;
    let retrasosGraves = 0;

    for(let hora of hora){
        let [h,m] = hora.split(":").map(Number);
        let minutosLlegada = h * 60 + m;
        let minutosLimite = 8 * 60;

        if (minutosLlegada > minutosLimite){
            let retraso = minutosLlegada - minutosLimite;
            multaTotal+= retraso * 2;

            if (retraso > 15){
                retrasosGraves++;
            }
    }
}
if (retrasosGraves > 2){
    return "suspendido";
}
return multaTotal;
}

module . exports = controlAsistencia;   