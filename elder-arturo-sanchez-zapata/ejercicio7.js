function validarPassword(password) {
    if (password.length < 8) {
        return "Insegura";
    }
    let tieneNumero = false;
    let tieneEspecial = false;
    const especiales = "!@#$%^&*()_+-=[]{}|;':\",./<>?";
    for (let i = 0; i < password.length; i++) {
        let caracter = password[i];
        if (!isNaN(caracter)) {
            tieneNumero = true;
        } else if (especiales.includes(caracter)) {
            tieneEspecial = true;
        }
    }
    if (tieneNumero && tieneEspecial) {
        return "Segura";
    }
    return "Insegura";
}
export { validarPassword };