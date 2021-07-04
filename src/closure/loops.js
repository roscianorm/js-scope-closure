// Al mezclar el alcance/scope con el closure podemos crear bloques de codigo que realmente no controlamos, como lo es el siguiente ejemplo en el que el objetivo era imprimir la secuencia de numernos del 0 al 9 pero el resultado fue el valor final de i 10 veces que resulto ser 10.
const anotherFunction = () => {
  for (var i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log(i)
    }, 1000)
  }
}

anotherFunction()
