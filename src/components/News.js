import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    country: "us",
    pageSize: 6,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
    document.title=`NewsMonkey-${this.capitalizeFirstLetter(this.props.category)}`
  }

  async updateNews() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f0c2df9beedc4981bb539f7d6c737e45&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseddata = await data.json();
    this.setState({
      articles: parseddata.articles,
      totalResults: parseddata.totalResults,
      loading: false,
    });
  }

  async componentDidMount() {
    this.updateNews();
  }
  handlePrev = async () => {
    this.setState({
      page: this.state.page - 1
    });
    this.updateNews();
  };

  hanldeNext = async () => {
   
      this.setState({
        page: this.state.page + 1
      });
      this.updateNews();
    }
  

  render() {
    return (
      <div>
        <div className="container my-3">
          <h1 className="text-center">News API</h1>
          {this.state.loading && <Spinner />}
          <div className="row my-3">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4" style={{ margin: "23px 0px" }}>
                  <Newsitem
                    title={element.title ? element.title.slice(0, 44) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : ""
                    }
                    urlImage={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://media.cnn.com/api/v1/images/stellar/prod/230922141856-dallas-mayor-eric-johnson-file.jpg?c=16x9&q=w_800,c_fill"
                    }
                    url={element.url ? element.url : ""}
                    author={element.author ? element.author : "Unknown"}
                    publishedAt={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="container d-flex justify-content-center">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark mx-2"
            onClick={this.handlePrev}
          >
            &larr; Prev
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-dark mx-2"
            onClick={this.hanldeNext}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
