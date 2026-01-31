function calcularEstudiantesFuera(capacidad, grupos) {
    let capacidadActual = 0;
    let totalEstudiantes = 0;
    let estudiantesDentro = 0;
    for (let i = 0; i < grupos.length; i++) {
        totalEstudiantes += grupos[i];
        
        if (capacidadActual + grupos[i] <= capacidad) {
            capacidadActual += grupos[i];
            estudiantesDentro += grupos[i];
        }
    }
    return totalEstudiantes - estudiantesDentro;
}
export { calcularEstudiantesFuera };