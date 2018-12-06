import { Game } from 'checkers-engine'
import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  state = {
    itWorked: false
  }

  componentDidMount() {
    const game = new Game()

    if (game.game) this.setState({ itWorked: true })
  }

  render () {
    const { itWorked } = this.state

    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React {itWorked && 'It worked!!!'}
          </a>
        </header>
      </div>
    )
  }
}

export default App
