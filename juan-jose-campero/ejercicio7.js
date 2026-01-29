function pedirContraseña() {
    const contraseña = prompt("Ingrese una contraseña:");
    return contraseña;
}



function validaContraseña(contraseña) {
    if (contraseña.length < 8) {
        return "insegura";
    }


    let tieneNumero = false;
    let tieneEspecial = false;

    for (const char of contraseña) {
        if (char >= '0' && char <= '9') {
            tieneNumero = true;
        } else if (!(char >= 'a' && char <= 'z') && !(char >= 'A' && char <= 'Z')) {
            tieneEspecial = true;   
        }

        if (tieneNumero && tieneEspecial) {
            return "segura";
        }
    }

    return "insegura";
}

export default validaContraseña;
export { pedirContraseña };