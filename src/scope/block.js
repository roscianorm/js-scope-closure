const fruits = () => {
  if (true) {
    var fruit1 = 'apple'
    let fruit2 = 'banana' // No esta dentro del scope del console.log()
    const fruit3 = 'kiwi' // No esta dentro del scope del console.log()
  }
  let fruit2 = 'banana'
  const fruit3 = 'kiwi'

  console.log(fruit1)
  console.log(fruit2)
  console.log(fruit3)
}

fruits()

// -------------------------

let x = 1
{
  let x = 2
  console.log(x)
}

console.log(x)

// -------------------------

const anotherFunction = () => {
  // for (let i = 0; i < 10; i++) {
  for (var i = 0; i < 10; i++) {
    console.log('test', i)
    setTimeout(() => {
      console.log('setTimeout', i) // Toma el valor global de i que es el ultimo valor que se le asigno en el ciclo
    }, 1000)
  }
}

anotherFunction()
