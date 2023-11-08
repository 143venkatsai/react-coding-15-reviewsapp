import {Component} from 'react'
import './index.css'

class ReviewCarousel extends Component {
  state = {activeIndex: 0}

  getReviews = review => {
    const {activeIndex} = this.state
    const {imgUrl, username, companyName, description} = review[activeIndex]

    return (
      <div className="review">
        <img src={imgUrl} className="user-image" alt={username} />
        <p className="user-name">{username}</p>
        <p className="company-name">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }

  onLeft = () => {
    const {activeIndex} = this.state

    if (activeIndex > 0) {
      this.setState(prevState => ({activeIndex: prevState.activeIndex - 1}))
    }
  }

  onRight = () => {
    const {activeIndex} = this.state
    const {reviewsList} = this.props

    if (activeIndex < reviewsList.length - 1) {
      this.setState(prevState => ({activeIndex: prevState.activeIndex + 1}))
    }
  }

  render() {
    const {reviewsList} = this.props

    return (
      <div className="bg-container">
        <h1 className="heading">Reviews</h1>
        <div className="reviews-container">
          <button
            className="button"
            type="button"
            onClick={this.onLeft}
            data-testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="arrow"
            />
          </button>
          {this.getReviews(reviewsList)}
          <button
            className="button"
            type="button"
            onClick={this.onRight}
            data-testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewCarousel
