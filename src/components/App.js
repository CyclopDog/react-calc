import React from 'react'
import Display from './Display'
import ButtonPanel from './ButtonPanel'
import calculate from '../logic/calculate'

class App extends React.Component {
  render () {
    return (
      <div>
        <Display />
        <ButtonPanel />
      </div>
    )
  }
}

export default App
