 function ingresoEstudiantes() {
 
 const estudiantes = [];
                const cantidad = Number(prompt("Ingrese la cantidad de estudiantes: "));
                
                if (isNaN(cantidad) || cantidad <= 0) {
                    console.log("Cantidad inválida.");
                    
                }

                for (let i = 0; i < cantidad; i++) {
                    console.log(`Ingrese los datos del estudiante ${i + 1}:`);
                    const nombre = prompt("Nombre: ");
                    const edad = Number(prompt("Edad: "));
                    const estrato = Number(prompt("Estrato (1-6): "));
                    const promedio = Number(prompt("Promedio (0.0 - 5.0): "));

                    if (isNaN(edad) || isNaN(estrato) || isNaN(promedio) || edad <= 0 || estrato < 1 || estrato > 6 || promedio < 0.0 || promedio > 5.0) {
                        console.log("Datos inválidos. Por favor, ingrese nuevamente.");
                        i--;
                        continue;
                    }

                    estudiantes.push({ nombre, edad, estrato, promedio });
                }

    return estudiantes;
}

function tendraBeca(estudiante) {
   const condicionPromedioAlto = estudiante.promedio >= 4.5;

   const condicionSocial = estudiante.edad > 18 && (estudiante.estrato === 1 || estudiante.estrato === 2) && estudiante.promedio >= 4.0;

   return condicionPromedioAlto || condicionSocial;
}

export default tendraBeca;
export { ingresoEstudiantes };