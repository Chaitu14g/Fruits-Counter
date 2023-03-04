import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {countNumOne: 0, countNumTWo: 0}

  onMango = () => {
    this.setState(prevState => ({countNumOne: prevState.countNumOne + 1}))
  }

  onBanana = () => {
    this.setState(prevState => ({countNumTWo: prevState.countNumTWo + 1}))
  }

  render() {
    const {countNumOne, countNumTWo} = this.state
    return (
      <div className="background_container">
        <div className="sub_container">
          <h1 className="heading">
            Bob ate <span className="span_color">{countNumOne}</span> mangoes{' '}
            <span className="span_color">{countNumTWo}</span> bananas{' '}
          </h1>
          <div className="image_container">
            <div className="image_containers">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="image"
                alt="Mango"
              />
              <button type="button" className="button" onClick={this.onMango}>
                Eat Mango
              </button>
            </div>
            <div className="image_containers">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                className="image"
                alt="Banana"
              />
              <button type="button" className="button" onClick={this.onBanana}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
