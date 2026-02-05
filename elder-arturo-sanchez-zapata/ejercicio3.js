function evaluarBeca(estudiante) {
    const cumplePromedioAlto = estudiante.promedio >= 4.5;
    const cumplePerfilSocial = estudiante.edad > 18 && 
                               (estudiante.estrato === 1 || estudiante.estrato === 2) && 
                               estudiante.promedio >= 4.0;

    if (cumplePromedioAlto || cumplePerfilSocial) {
        return true;
    }

    return false;
}

export { evaluarBeca };