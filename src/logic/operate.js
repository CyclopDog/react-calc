import Big from 'big.js'

const operate = (numberOne, numberTwo, operation) => {
  const x = Big(numberOne)
  const y = Big(numberTwo)
  Big.DP = 15
  switch (operation) {
    case '÷':
      x.div(y)
      break

    case 'X':
      x.times(y)
      break

    case '-':
      x.minus(y)
      break

    case '+':
      x.plus(y)
      break

    default:
      break
  }
  return x
}

export default operate
