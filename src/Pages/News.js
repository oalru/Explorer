import React, { Component } from 'react';
import axios from 'axios';
import {Button, Container, Card} from 'react-bootstrap'



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
            <Container key={i}>
        <Card border="light" bg="dark" text="white" style={{ width: '70rem' }}>
        <Card.Img variant="top" src={art.urlToImage} />
        <Card.Body>
          <Card.Title>{art.title}</Card.Title>
          <Card.Text >
          {art.content}
          </Card.Text>
          <Button href={art.url} variant="primary">Read More</Button>
          <Button onClick={(e)=> {
            e.preventDefault()
            this.props.addToFavorate(art)}
            } variant="success">Add to Favorite</Button>
        </Card.Body>
      </Card>
      </Container>
        )
    // return (
    //     <Card className={classes.card}>
    //       <CardHeader
    //         title={art.title}
    //       />
    //       <CardMedia
    //         className={classes.media}
    //         image={art.urlToImage}
    //       />
    //       <CardContent>
    //         <Typography variant="body2" color="textPrimary" component="p">
    //         {art.content}
    //         </Typography>
    //       </CardContent>
    //       <CardActions disableSpacing>
    //         <IconButton aria-label="add to favorites">
    //           <FavoriteIcon />
    //         </IconButton>
    //         <Button onClick={art.url} variant="primary">Read More</Button>
    //       </CardActions>
    //     </Card>
    //   );
    })
    return (
        <div className="cards">
            {tt}
        </div>
    )
}}

export default News;

////////////////////////////////////////


  
  
  
    
  