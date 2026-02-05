export function ejercicio13(){
    const registroTemperaturas = [30, 32, 36, 38, 37, 34, 33, 35];
    const limiteTemperatura = 35;
    let contadorConsecutivo = 0;

    for(let i = 0; i < registroTemperaturas.length; i++){
        if(registroTemperaturas[i] > limiteTemperatura){
            contadorConsecutivo++;
        
            if(contadorConsecutivo === 3){
                alert("Alarma: sobrecalentamiento");
            }
        } else {
            contadorConsecutivo = 0;
        }
        
    }
    alert("Estado normal");
}