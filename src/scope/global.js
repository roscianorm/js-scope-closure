// Podemos acceder a las variables declaradas con var en cualquier parte del codigo
var hello = 'Hello'
console.log('var', hello)

let world = 'Hello World'
const helloWorld = 'Hello World'

const anotherFunction = () => {
  console.log('var', hello)
  console.log('let', world)
  console.log('const', helloWorld)
}

anotherFunction()
