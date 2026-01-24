
export function validarContrasena(password) {
    if (password.length < 8) {
        return "Insegura";
    }

    let tieneNumero = false;
    let tieneEspecial = false;
    
    const caracteresEspeciales = "!@#$%^&*()_+-=[]{}|;':,.<>?/";

    for (let caracter of password) {
        

        if (!isNaN(caracter) && caracter !== " ") {
            tieneNumero = true;
        }

        if (caracteresEspeciales.includes(caracter)) {
            tieneEspecial = true;
        }
    }

    if (tieneNumero && tieneEspecial) {
        return "Segura";
    } else {
        return "Insegura";
    }
}