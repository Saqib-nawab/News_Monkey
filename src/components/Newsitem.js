import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    let { title, description, urlImage, url, author, publishedAt, source } = this.props;
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img src={urlImage} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">
              {title}...{" "}
              <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{zindex: '1', left: '85%'}}>
                {source}
                <span class="visually-hidden">unread messages</span>
              </span>
            </h5>
            <p className="card-text">{description}...</p>
            <a href={url} target="_blank" className="btn btn-sm btn-dark">
              Read more
            </a>
            <div>
              <small class="text-muted">
                By {author} on {publishedAt}
              </small>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
