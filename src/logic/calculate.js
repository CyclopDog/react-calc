import operate from './operate'
import Big from 'big.js'

const calculate = (calculator, buttonName = '') => {
  if (isFinite(buttonName) && !calculator.operation) {
    if (calculator.total) {
      calculator.total += buttonName
    } else {
      calculator.total = buttonName
    }
  } else if (isFinite(buttonName) && calculator.operation === '=') {
    calculator.operation = null
    calculator.total = buttonName
  } else if (calculator.total && isFinite(buttonName) && calculator.operation) {
    if (calculator.next) {
      calculator.next += buttonName
    } else {
      calculator.next = buttonName
    }
  }
  if (!isFinite(buttonName)) {
    if (calculator.operation && calculator.next && buttonName !== '.') {
      calculator.total = operate(calculator.total, calculator.next, calculator.operation)
      calculator.next = null
      calculator.operation = null
    }

    if (buttonName !== '.') {
      calculator.operation = buttonName
    }

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
        if (calculator.total.includes('.') && !calculator.next) {
          return calculator
        } else if (!calculator.total) {
          return { total: '0.' }
        } else if (calculator.total && !calculator.next) {
          return { total: calculator.total + '.' }
        } else if (calculator.next) {
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
    }
  }
  return calculator
}

export default calculate
