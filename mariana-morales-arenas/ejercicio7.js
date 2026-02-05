function validadorContraseña(contraseña){
    let tieneNumero = false;    
    let tieneEspecial = false;  

    if (contraseña.length < 8) {
        return insegura;
    }

    for (let caracter of contraseña) {
        if(caracter >= "0" && caracter <= "9") {
            tieneNumero = true;
        } else if(
            !(caracter >= "a" && caracter <= "z") &&
            !(caracter >= "A" && caracter <= "Z")
        ){
            tieneEspecial = true;
        }
}
if (tieneNumero && tieneEspecial) {
    return "segura";
}
return "insegura";
}
module.exports = validadorContraseña;