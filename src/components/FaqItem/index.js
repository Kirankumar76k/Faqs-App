import {Component} from 'react'

import './index.css'

class FaqItem extends Component {
  state = {isActive: false}

  onClickPlusMinus = () => {
    this.setState(prevState => ({isActive: !prevState.isActive}))
  }

  getAnswer = () => {
    const {faqDetails} = this.props
    const {isActive} = this.state
    const {answerText} = faqDetails
    if (isActive) {
      return (
        <div className="ans-container d-none">
          <hr className="hr" />
          <p className="k">{answerText}</p>
        </div>
      )
    }
    return null
  }

  render() {
    const {faqDetails} = this.props
    const {isActive} = this.state

    const {id, questionText} = faqDetails
    const imgUrl = isActive
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const altName = isActive ? 'minus' : 'plus'
    return (
      <li key={id}>
        <div className="item">
          <div className="qustn-container">
            <h1 className="question">{questionText}</h1>
            <button
              className="button"
              type="button"
              onClick={this.onClickPlusMinus}
            >
              <img src={imgUrl} alt={altName} />
            </button>
          </div>
          {this.getAnswer()}
        </div>
      </li>
    )
  }
}
export default FaqItem
