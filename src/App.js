import React, { Component } from 'react';
import './App.css'

class App extends Component {

  // Initiate state
  state = {
    rows: 10,
    cols: 10,
    grid: [],
  };

  componentDidMount() {
    const splice = this.getRandomGrid();

    let grid1 = [];
    for (let row = 0; row < this.state.rows; row++) {
      for (let col = 0; col < this.state.cols; col++) {
        const isSplice = (splice.row === row && splice.col === col);
        grid1.push({
          row,
          col,
          isSplice,
        })
      }
    }

    this.setState({ grid: grid1 })

  }

  // Gets random grid position
getRandomGrid() {
  return {
    row: Math.floor((Math.random() * this.state.rows)),
    col: Math.floor((Math.random() * this.state.cols))
  }
}

  render () {
    const gridItems = this.state.grid.map((grid) => {
      return(
        <div className="grid-item">
          <div
            key={grid.row.toString() + '-' + grid.col.toString()}
            className={grid.isSplice ? 'is-splice' : ''} >
          </div>
        </div>
      )
    })
    return (
      <div className="container">
        <div className="grid">{gridItems}</div>
      </div>
    )
  }
}

export default App;
