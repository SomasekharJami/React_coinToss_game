import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {count: 0, HeadCount: 0, TailCount: 0, head: true}

  onClicking = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({
        HeadCount: prevState.HeadCount + 1,
        head: true,
      }))
    } else {
      this.setState(prevState => ({
        TailCount: prevState.TailCount + 1,
        head: false,
      }))
    }
  }

  render() {
    const {count, HeadCount, TailCount, head} = this.state

    return (
      <div className="mainCon">
        <div className="innerCon">
          <h1 className="mainH">Coin Toss Game</h1>
          <p className="mainP">Heads (or) Tails</p>
          {head ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
              alt="toss result"
              className="img1"
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
              alt="toss result"
              className="img1"
            />
          )}
          <button className="bton" type="button" onClick={this.onClicking}>
            Toss Coin
          </button>
          <div className="countCon">
            <p className="subP">Total: {count}</p>
            <p className="subP">Heads: {HeadCount}</p>
            <p className="subP">Tails: {TailCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
