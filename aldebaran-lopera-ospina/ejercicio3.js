export function verificarBeca(estudiante) {

    if (estudiante.promedio >= 4.5) {
        return true;
    }

    const esMayor = estudiante.edad > 18;
    const estratoBajo = estudiante.estrato === 1 || estudiante.estrato === 2;
    const promedioDecente = estudiante.promedio >= 4.0;

    if (esMayor && estratoBajo && promedioDecente) {
        return true;
    }

    return false;
}

