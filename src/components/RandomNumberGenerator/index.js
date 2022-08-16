// Write your code here

import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  onGenerate = () => {
    const RandomNum = Math.ceil(Math.random() * 100)
    this.setState({count: RandomNum})
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="random-head">Random Number</h1>
          <p className="random-para">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            className="generate-button"
            type="button"
            onClick={this.onGenerate}
          >
            Generate
          </button>
          <p className="count-para">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
