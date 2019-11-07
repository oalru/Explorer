import React, { Component } from 'react';
import axios from 'axios';
import {Container, Row, Col} from 'react-bootstrap'

class Sport extends Component {
constructor() {
    super();
    this.state = {
        fixtures: []
    };
}
componentDidMount(){
    axios({
        method: 'GET',
        url: 'https://api-football-v1.p.rapidapi.com/v2/fixtures/league/2',
        headers: {'X-RapidAPI-Key': '373a0f400amsh0d176c1631aeec3p194d21jsnd1559ece83af'}
    })
    .then(res => {
        const fixtures = res.data.api.fixtures;
        this.setState({
            fixtures: fixtures,
        });
    })
    .catch(err => {
        console.log(err);
    })
}
render(){
    const tt = this.state.fixtures.map((match, i )=> {
        return(
        <Container>
             <Row>
          <Col className="pL">Premiere League</Col>
        </Row>
        <Row className="homeAway">
          <Col>Home</Col>
          <Col>Score</Col>
          <Col>Away</Col>
        </Row>
        <Row>
          <Col className='home' key={i}>{match.homeTeam.team_name}</Col>
          <Col key={i}>{match.score.fulltime}</Col>
          <Col className='away' key={i}>{match.awayTeam.team_name}</Col>
        </Row>
      </Container>)
    })
    return (
        <div className="art">
            {tt}
        </div>
    )
}}

export default Sport;