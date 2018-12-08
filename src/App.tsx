import {
  Board as GameBoard,
  GameMaker
} from 'checkers-engine'
import React, { Component } from 'react'

import Board from './Board/Board'

import './App.css'

interface IState {
  game: {
    board: GameBoard
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
    const game = GameMaker.create(0)

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
