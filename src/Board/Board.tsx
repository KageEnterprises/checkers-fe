import { Board as GameBoard } from 'checkers-engine'
import React, { Component } from 'react'

import Tile from '../Tile/Tile'

class Board extends Component<GameBoard> {
  render () {
    const { tiles, width } = this.props

    const Tiles = tiles.map(tile => <Tile boardWidth={width} key={tile.positionId} {...tile} />)

    return (
      <div className='checkerBoard'>{Tiles}</div>
    )
  }
}

export default Board
