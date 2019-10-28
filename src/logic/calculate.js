import React from 'react'

const calculate = (calculator = { total: 0, next: 0, operation: '' }, buttonName = '') => {
  switch (buttonName) {
    case '+/-':
      calculator.total *= -1
      calculator.next *= -1
      break

    case 'X':
      calculator.total *= calculator.next
      break

    default:
      break
  }
  return calculator
}

export default calculate
