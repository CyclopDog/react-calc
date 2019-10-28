import React from 'react'
import Display from './Display'
import ButtonPanel from './ButtonPanel'
import calculate from '../logic/calculate'

class App extends React.Component {
  render () {
    console.log(calculate({ total: '3', next: '4' }, 'AC'))
    return (
      <div>
        <Display />
        <ButtonPanel />
      </div>
    )
  }
}

export default App
