import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loading from './Loading';

export class News extends Component {
  static defaultProps = {
    country:'in',
    category:'general',
    pageSize:6
  }

  constructor(){
    super();
    this.state = {
      articles:[],
      loading:false,
      page:1
    }
  } 

  componentDidMount = async() => { // In order to interact with the browser we use componentDidMount method. It is component lifecycle method.
    this.setState({loading:true})

    let response = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d3ce2db8e36c4d25a050b4c3a67f19da=${this.state.page}&pageSize=${this.props.pageSize}`);
    let json = await response.json(); 
    console.log(json);

    this.setState({
      articles:json.articles,
      last:Math.ceil(json.totalResults/(this.props.pageSize)),
      loading:false
    });
  }

  prevFunction = async() =>{
    // window.scrollTo(0, 0) ;
    this.setState({loading:true})

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fcc8f5c2ffe54e57b53b2b17cab248e0&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;

    let response = await fetch(url);

    let json = await response.json(); 
    
    this.setState({
      page : this.state.page-1,
      articles:json.articles,
      loading:false
    });
    
    console.log("Previous Function");
  }

  nextFunction = async() =>{
    // window.scrollTo(0, 0);
    this.setState({loading:true});

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fcc8f5c2ffe54e57b53b2b17cab248e0&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    let response = await fetch(url);

    let json = await response.json(); 
    
    this.setState({
      page : this.state.page+1,
      articles:json.articles,
      loading:false
    });
    
    console.log("Next Function");
  };

  render() {
    return (
      
      <>
      <div className='container my-3'>
        <h1 className="text-center">NewsMaina Top Headlines -</h1>
        {this.state.loading && <Loading />} 
        <div className="row">
          {this.state.articles?.map((element) =>{
            return <div className="col-md-4" key={element.url}>
                   <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} 
                   newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
            </div>
          })} 
          <div className="container d-flex justify-content-between my-3">
            {/* Use this.state.page  */}
            <button disabled={this.state.page<=1?true:false} type="button" className="btn btn-dark" onClick={this.prevFunction}>&larr; Previous</button>
            <button disabled={this.state.page===this.state.last?true:false} type="button" className="btn btn-dark" onClick={this.nextFunction}>Next &rarr;</button>
          </div>
        </div>
      </div>
      </>
    )
  }
}

export default News;
