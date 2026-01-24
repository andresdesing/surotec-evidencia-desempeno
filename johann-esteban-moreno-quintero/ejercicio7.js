export const passwordPruebaSegura = "Admin123*";
export const passwordPruebaInsegura = "12345";

export function validarPassword(password) {
    if (password.length < 8) {
        return "Insegura";
    }

    let tieneNumero = false;
    let tieneCaracterEspecial = false;
    const especiales = "!@#$%^&*()-_=+[]{};:'\",.<>/?|\\";

    for (let i = 0; i < password.length; i++) {
        const caracter = password[i];

        if (!isNaN(caracter) && caracter !== " ") {
            tieneNumero = true;
        } else if (especiales.includes(caracter)) {
            tieneCaracterEspecial = true;
        }
    }

    if (tieneNumero && tieneCaracterEspecial) {
        return "Segura";
    }

    return "Insegura";
}