import React, { Component } from "react";
import axios from "axios";
import { Button, CardDeck, Card, Container } from "react-bootstrap";

class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
    };
  }
  componentDidMount() {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=50e07ba9c20a400bab67cc404055d499"
      )

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
    const tt = this.state.articles.map((article, i) => {
      return (
        <Container style={{ width: "50rem" }}>
          <br />
          <CardDeck>
            <Card key={i}>
                <Card.Title>{article.title}</Card.Title>
              <Card.Img src={article.urlToImage} />
              <Card.Body>
                <Card.Text>{article.content}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button href={article.url} variant="primary">
                  Read More
                </Button>
                {' '}
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    this.props.addToFavorate(article);
                  }}
                  variant="success"
                >
                  Add to Favorite
                </Button>
              </Card.Footer>
            </Card>
          </CardDeck>
          <br />
        </Container>
      );
    });
    return <Container >{tt}</Container>;
  }
}

export default News;
