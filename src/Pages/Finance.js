import React, { Component } from 'react';
import axios from 'axios';
import {Card, Button, Container} from 'react-bootstrap'

class Finance extends Component {
    constructor() {
        super();
        this.state = {
            articles: []
        };
    }
    componentDidMount(){
        axios.get('https://stocknewsapi.com/api/v1/category?section=alltickers&items=20&token=vqgosjsfvoxkfptfgwfh5ddogra6s19l2otwweg5')
        .then(res => {
            const articles = res.data.data;
            this.setState({
                articles: articles,
            });
        })
        .catch(err => {
            console.log(err);
        })
    }
    render(){
        const tt = this.state.articles.map((news, i)=> {
            return (
                <Container>
                <Card border="light" bg="dark" text="white" style={{ width: '70rem' }}>
                <Card.Img variant="top" src={news.image_url} />
                <Card.Body>
                  <Card.Title key={i}>{news.title}</Card.Title>
                  <Card.Text key={i}>{news.text}</Card.Text>
                  <Button onClick={news.news_url} variant="primary">Read More</Button>
                </Card.Body>
              </Card>
              </Container>
            )
        })
        return (
            <div className="cards">
                {tt}
            </div>
        )
    }}
    
    export default Finance;