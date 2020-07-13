import React, { Component } from 'react';
import {Button, Container, Card} from 'react-bootstrap';

class Favorite extends Component {
    render () {
        const lists = this.props.mylist.map((article,i)=> {
            return <Container  key={i}>
            <Card border="light" bg="dark" text="white" style={{ width: '70rem' }}>
            <Card.Img variant="top" src={article.urlToImage} />
            <Card.Body>
              <Card.Title >{article.title}</Card.Title>
              <Card.Text >
              {article.content}
              </Card.Text>
              <Button href={article.url} variant="primary">Read More</Button>
              <Button onClick={()=> this.props.removeOne(article)} variant="danger">Remove</Button>
            </Card.Body>
          </Card>
          </Container>
        })
        return(
            <div>
        {lists}
        <Button variant="dark" onClick={this.props.clearAllClick}>Clear All</Button>
        </div>
        )   
    }
}

export default Favorite;