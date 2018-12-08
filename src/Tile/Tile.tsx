import { Tile as IGameBoardTile } from 'checkers-engine'
import React, { Component } from 'react'

interface ITile extends IGameBoardTile {
  boardWidth: number
}

class Tile extends Component<ITile> {
  render () {
    const {
      boardWidth,
      valid
    } = this.props

    return (
      <div
        className='tile'
        style={{
          backgroundColor: valid ? 'green' : 'white',
          flex: `0 0 ${100 / boardWidth}%`,
          paddingTop: `${100 / boardWidth}%`
        }}
      />
    )
  }
}

export default Tile
