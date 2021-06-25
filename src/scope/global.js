// Scope, es el alcance que va a tener la variable dentro de tu codigo
// Tambien se puede definir como el que se encarga de definir a que bloques de codigo va a acceder una variable

// Podemos acceder a las variables declaradas con var en cualquier parte del codigo
var hello = 'Hello'
console.log('var', hello)

var hello = 'Hello +' // Reasignar el valor de las variables de esta manera solo es posible cuando son declaradas con var y es una mala practica
let world = 'Hello World'
const helloWorld = 'Hello World'

const anotherFunction = () => {
  console.log('var', hello)
  console.log('let', world)
  console.log('const', helloWorld)
}

anotherFunction()

const helloWorld2 = () => {
  globalVar = 'Im global'
}

helloWorld2()
console.log(globalVar)

const anotherFunction2 = () => {
  var localVar = (globalVar2 = 'Im global2')
}

anotherFunction2()
console.log(globalVar2)
