export function ejercicio3() {
    const estudiante = {
        promedio: parseFloat(prompt("Ingrese el promedio del estudiante: ")),
        edad: parseInt(prompt("Ingrese la edad del estudiante: ")),
        nivelSocioeconomico: parseInt(prompt("Ingrese el nivel socioeconómico del estudiante: "))
    };

    const cumplePromedio = estudiante.promedio >= 4.5;
    const cumpleCondicionSocial = estudiante.edad > 18 && estudiante.nivelSocioeconomico <= 2 && estudiante.promedio >= 4.0;

    if (cumplePromedio || cumpleCondicionSocial) {
        const mensajeAplica = "Aplica para el beneficio de la beca";
        alert(mensajeAplica);
        return mensajeAplica;
    }

    const mensajeNoAplica = "No aplica para el beneficio de la beca";
    alert(mensajeNoAplica);
    return mensajeNoAplica;
}