const helloWorld = () => {
  const hello = 'hello'
  console.log(hello)
}

helloWorld()
// console.log(hello) // No hay una variable global hello, por eso tira error

var scope = "I'm global"
const functionScope = () => {
  var scope = "I'm just a local"
  const func = () => {
    return scope
  }
  console.log(func())
}

functionScope()
console.log(scope)
