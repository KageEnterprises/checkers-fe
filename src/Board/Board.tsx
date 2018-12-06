import { IGameBoard } from 'checkers-engine'
import React, { Component } from 'react'

import Tile from '../Tile/Tile'

class Board extends Component<IGameBoard> {
  render() {
    const { tiles, width } = this.props

    const Tiles = tiles.map(tile => <Tile boardWidth={width} key={tile.id} {...tile} />)

    return (
      <div className="checkerBoard">{Tiles}</div>
    )
  }
}

export default Board