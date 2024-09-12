import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date,source} = this.props;
    return (
      <div className="my-3">
        <div className="card">
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:"84%",zIndex:"1"}}>
              {source}
            </span>
          <img src={imageUrl ? imageUrl : "https://s.yimg.com/ny/api/res/1.2/Upz_AkOmgbulL1QdNQMNRQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD03NzY-/https://media.zenfs.com/en/bloomberg_markets_842/a031f93e7638e59b72e5e7dc820c133d"} className="card-img-top" alt="..." />
          
          <div className="card-body">
            <h5 className="card-title">{title}</h5>

            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-dark">Read More</a>
            {/* noopener & noreferrer is used to support the old browser */}
          </div>
        </div>
      </div>
    )
  }
}
