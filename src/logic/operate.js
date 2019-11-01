import Big from 'big.js'

const operate = (numberOne, numberTwo, operation) => {
  const x = Big(numberOne)
  const y = Big(numberTwo)
  Big.DP = 15
  switch (operation) {
    case '÷':
      if (y.c[0] === 0) {
        alert('You Shall Not Divide By 0!')
        return '0'
      } else {
        return x.div(y).toString()
      }

    case 'X':
      return x.times(y).toString()

    case '-':
      return x.minus(y).toString()

    case '+':
      return x.plus(y).toString()

    default:
      break
  }
}

export default operate
