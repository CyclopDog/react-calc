import operate from './operate'
import Big from 'big.js'

const calculate = (calculator, buttonName = '') => {
  if (!isFinite(buttonName)) {
    calculator.operation = buttonName
    switch (buttonName) {
      case 'AC':
        return {
          total: null,
          next: null,
          operation: null
        }

      case '+/-':
        if (calculator.next) {
          return { next: (-1 * parseFloat(calculator.next)).toString() }
        }
        if (calculator.total) {
          return { total: (-1 * parseFloat(calculator.total)).toString() }
        }
        return {}

      case '%':
        if (calculator.operation && calculator.next) {
          const result = operate(calculator.total, calculator.next, calculator.operation)
          return {
            total: Big(result)
              .div(Big('100'))
              .toString(),
            next: null,
            operation: null
          }
        }
        if (calculator.next) {
          return {
            next: Big(calculator.next)
              .div(Big('100'))
              .toString()
          }
        }
        return {}

      case '.':
        if (calculator.next) {
          if (calculator.next.includes('.')) {
            return {}
          }
          return { next: calculator.next + '.' }
        }
        return { next: '0.' }

      case '=':
        if (calculator.next && calculator.operation) {
          return {
            total: operate(calculator.total, calculator.next, calculator.operation),
            next: null,
            operation: null
          }
        } else {
          return {}
        }

      default:
        if (calculator.next && calculator.operation) {
          return {
            total: operate(calculator.total, calculator.next, calculator.operation),
            next: null,
            operation: null
          }
        } else {
          return {}
        }
    }
  } else {
    if (calculator.total === 0) {
      calculator.total += calculator.next
    } else {
      const calc = calculator.total + buttonName
      calculator.total = parseInt(calc)
    }
    return calculator
  }
}

export default calculate
