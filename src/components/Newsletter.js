
  import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Newsletter.css'
import { Carousel } from 'react-bootstrap';



    const API = 'https://newsapi.org/v2/top-headlines?country=ng&apiKey=07948f90dff0424aaa7e6bd7ef2a7cc1 '

  
  export class Newsletter extends Component {
      constructor(props) {
        super(props)
      
        this.state = {
           articles: [],
        }
      }

      componentDidMount(){
          fetch(API)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.setState({articles: data.articles})

            })
      }
      
    render() {
        const {articles} = this.state;
        var news = document.querySelector('.news-container');

        // news.scrollTop = news.scrollHeight;

      return (
        <div className='news-container'>

            {
                articles.map( (article, index) => (
                    <div key={index} className='news-body'>
                    <div className='news-title'><Link target="_blank" to={article.url}>{article.title}</Link></div>
                    <div className='news-subtitle'>{article.source.name}</div>
                    <img src={article.urlToImage} />
                    <div className='news-description'>{article.description}</div>

                </div>
                ))
            } 
          
        </div>
      )
    }
  }
  
  export default Newsletter
  



