import React, { Component } from 'react';
import {Button, Container, Card} from 'react-bootstrap';

class Favorite extends Component {

    
    render () {

        const lists = this.props.mylist.map((art,i)=> {
            return <Container key={i}>
            <Card border="light" bg="dark" text="white" style={{ width: '70rem' }}>
            <Card.Img variant="top" src={art.urlToImage} />
            <Card.Body>
              <Card.Title >{art.title}</Card.Title>
              <Card.Text >
              {art.content}
              </Card.Text>
              <Button href={art.url} variant="primary">Read More</Button>
              <Button onClick={()=> this.props.removeOne(art)} variant="danger">Remove</Button>
              
            </Card.Body>
          </Card>
          
          </Container>
        })

        return(
            <div>
        
        {lists}
        <Button onClick={()=> this.cleaAllClick()}>Clear All</Button>

        </div>
        )

        
    }
}



export default Favorite;