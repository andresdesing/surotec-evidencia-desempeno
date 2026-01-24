export function calcularEstudiantesFuera(capacidadMaxima, gruposEstudiantes) {
    let capacidadRestante = capacidadMaxima;
    let estudiantesFuera = 0;

    for (let i = 0; i < gruposEstudiantes.length; i++) {
        if (gruposEstudiantes[i] <= capacidadRestante) {
            capacidadRestante -= gruposEstudiantes[i];
        } else {
            estudiantesFuera += gruposEstudiantes[i] - capacidadRestante;
            capacidadRestante = 0; 
        }
    }

    return estudiantesFuera;
}
