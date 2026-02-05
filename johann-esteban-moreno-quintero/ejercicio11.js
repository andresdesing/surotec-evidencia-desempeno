export function calcularCapacidadAula(capacidad, grupos) {
    let capacidadRestante = capacidad;
    const detallesGrupos = [];

    grupos.forEach((cantidad, indice) => {
        const nombreGrupo = `Grupo ${indice + 1}`;
        let ingresaron = 0;
        let fuera = 0;

        if (cantidad <= capacidadRestante) {
            ingresaron = cantidad;
            capacidadRestante -= cantidad;
        } else {
            if (capacidadRestante > 0) {
                ingresaron = capacidadRestante;
                fuera = cantidad - capacidadRestante;
                capacidadRestante = 0;
            } else {
                fuera = cantidad;
            }
        }

        detallesGrupos.push({
            grupo: nombreGrupo,
            solicitados: cantidad,
            ingresaron: ingresaron,
            fuera: fuera
        });
    });

    const totalFuera = detallesGrupos.reduce((acc, g) => acc + g.fuera, 0);
    const totalIngresaron = detallesGrupos.reduce((acc, g) => acc + g.ingresaron, 0);

    return {
        desglose: detallesGrupos,
        resumen: {
            totalIngresaron,
            totalFuera,
            espacioSobrante: capacidadRestante
        }
    };
}