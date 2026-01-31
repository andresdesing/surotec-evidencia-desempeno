function capacidadAula(capacidad, grupos) {
let ocupados = 0;
let rechazados = 0;

for (let grupo of grupos) {
    if (ocupados + grupo <= capacidad) {
    ocupados += grupo;
    } else {
rechazados += grupo;
    }
}

return rechazados;
}

module.exports = capacidadAula;
