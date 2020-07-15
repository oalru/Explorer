import React, { Component } from "react";
import axios from "axios";
import { Card, Button, Container, CardDeck } from "react-bootstrap";

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
        <Container style={{ width: "50rem" }}>
          <br />
          <CardDeck>
          <Card  key={i}
          >
              <Card.Title>{news.title}</Card.Title>
            <Card.Img src={news.media} />
            <Card.Body>
              <Card.Text>{news.summary}</Card.Text>
            </Card.Body>
              <Card.Footer>
              <Button href={news.link} variant="primary">
                Read More
              </Button>
              </Card.Footer>
          </Card>
          </CardDeck>
          <br />
        </Container>
      );
    });
    return <div>{tt}</div>;
  }
}

export default Finance;
