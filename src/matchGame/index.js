import {Component} from 'react'

import './index.css'

import Tabs from '../tabs'

import Items from '../Items'

class MatchGame extends Component {
  state = {
    activeTab: 'FRUIT',
    status: false,
    count: 0,
    time: 60,
    imgId: 'b11ec8ce-35c9-4d67-a7f7-07516d0d8186',
    imgValue:
      'https://assets.ccbp.in/frontend/react-js/match-game/orange-img.png',
  }

  componentDidMount() {
    this.timeId = setInterval(this.tick, 1000)
  }

  tick = () => {
    const {time} = this.state
    this.setState(prevState => ({time: prevState.time - 1}))
    if (time === 1) {
      clearInterval(this.timeId)
    }
  }

  onClickActive = tabId => {
    const {tabsList} = this.props

    const val = tabsList.filter(each => each.tabId === tabId)

    this.setState({activeTab: val[0].tabId})
  }

  onClickPlay = () => {
    this.timeId = setInterval(this.tick, 1000)

    this.setState({count: 0, time: 60})
  }

  onClickMatch = id => {
    const {imgId} = this.state
    const {imagesList} = this.props
    if (id === imgId) {
      const index1 = Math.ceil(Math.random() * imagesList.length)
      this.setState({imgId: imagesList[index1].id})
      this.setState({imgValue: imagesList[index1].imageUrl})
      this.setState(prevState => ({count: prevState.count + 1}))
    } else {
      clearInterval(this.timeId)
      this.setState({time: 0})
    }
  }

  render() {
    const {imagesList, tabsList} = this.props
    const {status, count, time, activeTab, imgValue} = this.state
    const filtered = imagesList.filter(each => each.category === activeTab)
    return (
      <div className="back">
        <div className="backs">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
            alt="website logo"
            className="size"
          />
          <div className="div2">
            <ul>
              <li className="list7">
                <p className="head1">
                  Score:<span className="head">{count}</span>
                </p>
              </li>
            </ul>
            <div className="div1">
              <ul>
                <li className="list7">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
                    alt="timer"
                    className="size1"
                  />
                  <p className="head">{time} sec</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {time !== 0 ? (
          <div>
            <div className="list9">
              <img src={imgValue} alt="match" className="size2" />
              <ul className="Unlist1">
                {tabsList.map(each => (
                  <Tabs
                    key={each.tabId}
                    tabs={each}
                    activeTab={activeTab}
                    onClickActive={this.onClickActive}
                  />
                ))}
              </ul>
              <ul className="Unlist2">
                {filtered.map(each => (
                  <Items
                    key={each.id}
                    onClickMatch={this.onClickMatch}
                    Item={each}
                  />
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <div className="con5">
            <div className="background">
              <img
                src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
                alt=" trophy"
                className="img2"
              />
              <p>YOUR SCORE</p>
              <p>{count}</p>
              <button type="button" onClick={this.onClickPlay} className="but5">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
                  alt="reset"
                  className="size5"
                />
                <p>PLAY AGAIN</p>
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default MatchGame
