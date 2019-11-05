import React, { Component } from 'react';
import axios from 'axios';
import {Card, Button, Container} from 'react-bootstrap'

class News extends Component {
constructor() {
    super();
    this.state = {
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
        return (
            <Container>
        <Card border="light" bg="dark" text="white" style={{ width: '70rem' }}>
        <Card.Img variant="top" src={art.urlToImage} />
        <Card.Body>
          <Card.Title key={i}>{art.title}</Card.Title>
          <Card.Text key={i}>
          {art.content}
          </Card.Text>
          <Button onClick={art.url} variant="primary">Read More</Button>
        </Card.Body>
      </Card>
      </Container>
        )
    })
    return (
        <div>
            {tt}
        </div>
    )
}}

export default News;