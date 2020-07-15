import React, { Component } from "react";
import axios from "axios";
import { Card, Button, Container } from "react-bootstrap";

class Finance extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
    };
  }
  componentDidMount() {
    axios({
      method: "GET",
      url: "https://newscatcher.p.rapidapi.com/v1/latest_headlines",
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "newscatcher.p.rapidapi.com",
        "x-rapidapi-key": "373a0f400amsh0d176c1631aeec3p194d21jsnd1559ece83af",
        useQueryString: true,
      },
      params: {
        topic: "finance",
        lang: "en",
        media: "True",
      },
    })
      .then((res) => {
        const articles = res.data.articles;
        this.setState({
          articles: articles,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    const tt = this.state.articles.map((news, i) => {
      return (
        <Container>
          <Card
            border="light"
            bg="dark"
            text="white"
            style={{ width: "70rem" }}
          >
            <Card.Img variant="top" src={news.media} />
            <Card.Body>
              <Card.Title key={i}>{news.title}</Card.Title>
              <Card.Text key={i}>{news.summary}</Card.Text>
              <Button href={news.link} variant="primary">
                Read More
              </Button>
            </Card.Body>
          </Card>
        </Container>
      );
    });
    return <div>{tt}</div>;
  }
}

export default Finance;
