import React, { Component } from "react";
import NewsItem from "./NewsItem";
import PropTypes from 'prop-types';
import '../App.css';

export class News extends Component {



  static defaultProps = {
    country:'in',
    pageSize:6,
    category:'general',
  }

  static propTypes={
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,

  }





  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
    document.title = `TheNews-${this.props.category}`;
  }


  async updateNews()

  {
    const url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9cc4b952e4de4626a4b629b68e221965&page=${this.state.page}&pageSize=9cc4b952e4de4626a4b629b68e221965${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles,totalResults:parsedData.totalResults,loading:false});


  }




  async componentDidMount() {
   this.updateNews();
  }

  handlePrevClick = async () => {
   //let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9cc4b952e4de4626a4b629b68e221965&page=${
   //  this.state.page - 1
   //}&pageSize=${this.props.pageSize}`;
   //let data = await fetch(url);
   //let parsedData = await data.json();
   //console.log(parsedData);
   //this.setState({
   //  page: this.state.page - 1,
   //  articles: parsedData.articles,
   //});
   this.setState({page:this.state.page-1});
   this.updateNews();
  };
  handleNextClick = async () => {

  // if( this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize))
  // {

  // }
  // else{
  // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9cc4b952e4de4626a4b629b68e221965&page=${
  //   this.state.page + 1
  // }&pageSize=${this.props.pageSize}`;
  // let data = await fetch(url);
  // let parsedData = await data.json();
  // console.log(parsedData);
  // this.setState({
  //   page: this.state.page + 1,
  //   articles: parsedData.articles,
  // })
  //}
  this.setState({page:this.state.page+1});
  this.updateNews();
  };

  render() {
    return (
      <div className="  conatiner">
      <div className="  container  mx-5 my-3">
        <h1 className="  text-center" style={{marginTop:'90px'}}>Top Headlines::{this.props.category}</h1>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 50) : " "}
                  description={
                    element.description
                      ? element.description.slice(0, 108)
                      : " "
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button "
            className="btn btn-danger"
            onClick={this.handlePrevClick}
          >
            {" "}
            &larr; Previous
          </button>

          <button
          disabled={this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize)}
            type="button "
            className="btn btn-success"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
      </div>
    );
  }
}

export default News;
