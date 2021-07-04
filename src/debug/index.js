var a = 'Hello'

function hello() {
  let b = 'Hello world'
  const c = 'Hello world!'
  if (true) {
    let d = 'Hello world!!'
    debugger
  }
}

hello()

//----------------------------------------------------------------

// Ejemplo
const goodMoneyBox = () => {
  debugger
  let saveCoins = 0
  const countCoins = (coins) => {
    debugger
    saveCoins += coins
    console.log(`MoneyBox: $${saveCoins}`)
  }
  return countCoins
}

let myGoodMoneyBox = goodMoneyBox()
myGoodMoneyBox(5) // 5
myGoodMoneyBox(3) // 8
myGoodMoneyBox(11) // 19
