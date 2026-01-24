function mostrarMenu() {
  return prompt(
    "MENÚ PRINCIPAL EVALUACION DE DESEMPEÑO\n" +
    "1. Ejercicio 1\n" +
    "2. Ejercicio 2\n" +
    "3. Ejercicio 3\n" +
    "4. Ejercicio 4\n" +
    "5. Ejercicio 5\n" +
    "6. Ejercicio 6\n" +
    "7. Ejercicio 7\n" +
    "8. Ejercicio 8\n" +
    "9. Ejercicio 9\n" +
    "10. Ejercicio 10\n" +
    "11. Ejercicio 11\n" +
    "12. Ejercicio 12\n" +
    "13. Ejercicio 13\n" +
    "14. Ejercicio 14\n" +
    "15. Ejercicio 15\n" +
    "16. Ejercicio 16\n" +
    "17. Ejercicio 17\n" +
    "18. Ejercicio 18\n" +
    "19. Ejercicio 19\n" +
    "20. Ejercicio 20\n" +
    "0. Salir"
  )
}

function ejecutarMenu() {
  let opcion = ""

  while (opcion !== "0") {
    opcion = mostrarMenu()

    switch (opcion) {
      case "1":
        alert(ejercicio1())
        break
      case "2":
        alert(ejercicio2())
        break
      case "3":
        alert(ejercicio3())
        break
      case "4":
        alert(ejercicio4())
        break
      case "5":
        alert(ejercicio5())
        break
      case "6":
        alert(ejercicio6())
        break
      case "7":
        alert(ejercicio7())
        break
      case "8":
        alert(ejercicio8())
        break
      case "9":
        alert(ejercicio9())
        break
      case "10":
        alert(ejercicio10())
        break
      case "11":
        alert(ejercicio11())
        break
      case "12":
        alert(ejercicio12())
        break
      case "13":
        alert(ejercicio13())
        break
      case "14":
        alert(ejercicio14())
        break
      case "15":
        alert(ejercicio15())
        break
      case "16":
        alert(ejercicio16())
        break
      case "17":
        alert(ejercicio17())
        break
      case "18":
        alert(ejercicio18())
        break
      case "19":
        alert(ejercicio19())
        break
      case "20":
        alert(ejercicio20())
        break
      case "0":
        alert("Programa finalizado")
        break
      default:
        alert("Opción inválida")
    }
  }
}

ejecutarMenu()
