const moneyBox = (coins) => {
  let saveCoins = 0
  saveCoins += coins
  console.log(`MoneyBox: $${saveCoins}`)
}
moneyBox(3)
moneyBox(7)

// Ejemplo bueno 1
const goodMoneyBox = () => {
  let saveCoins = 0
  const countCoins = (coins) => {
    saveCoins += coins
    console.log(`MoneyBox: $${saveCoins}`)
  }
  return countCoins
}

let myGoodMoneyBox = goodMoneyBox()
myGoodMoneyBox(5) // 5
myGoodMoneyBox(3) // 8
myGoodMoneyBox(11) // 19

// Ejemplo bueno 2
function moneyBox() {
  let saveCoins = 0
  function countCoins(coins) {
    saveCoins += coins
    console.log(`MoneyBox: $${saveCoins}`)
  }
  return countCoins
}

let myMoneyBox = moneyBox()
myMoneyBox(3) // 3
myMoneyBox(7) // 10
myMoneyBox(8) // 18
