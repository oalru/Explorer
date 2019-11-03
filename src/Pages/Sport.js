import React from 'react';
import axios from 'axios';

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
        url: 'https://api-football-v1.p.rapidapi.com/v2/fixtures/league/419',
        headers: {
        "X-RapidAPI-Key": '373a0f400amsh0d176c1631aeec3p194d21jsnd1559ece83af'
        }
    })
    .then(res => {
        const fixtures = res.data.fixtures;
        console.log(res.data)
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
        return <div>
            <p key={i}> {match.homeTeam.team_name}</p>{ Vs }
        <p key={i}>{match.awayTeam.team_name}</p>
        <p key={i}>{match.score.fulltime}</p>
        </div>
    })
    return (
        <div>
            {tt}
        </div>
    )
}}


export default Sport;