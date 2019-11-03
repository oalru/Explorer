import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class News extends Component {
constructor() {
    super();
    this.state = {
        title: "",
        content: "",
        articles: []
    };
}
componentDidMount(){
    axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=50e07ba9c20a400bab67cc404055d499')

    .then(res => {
        const articles = res.data.articles;
        console.log(res.data)
        this.setState({
            articles: articles,
        });
    })
    .catch(err => {
        console.log(err);
    })
}
render(){
    const tt = this.state.articles.map((art, i )=> {
        return <div>
            <h2 key={i}> {art.title}</h2>
        <p key={i}>{art.content}</p>
        </div>
    })
    return (
        <div>
            {tt}
        </div>
    )
}}

export default News;