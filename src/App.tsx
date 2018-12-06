import {
  Game,
  IGameBoard
} from 'checkers-engine'
import React, { Component } from 'react'

import Board from './Board/Board'

import './App.css'

interface IState {
  game: {
    board: IGameBoard
  }
}

class App extends Component<{}, IState> {
  state = {
    game: {
      board: {
        height: 0,
        tiles: [],
        width: 0
      }
    }
  }

  componentDidMount () {
    const game = new Game({
      board: {
        height: 8,
        width: 8
      }
    })

    this.setState({ game })
  }

  render () {
    const { game } = this.state
    const { board } = game

    return (
      <div className='App'>
        <Board {...board} />
      </div>
    )
  }
}

export default App
