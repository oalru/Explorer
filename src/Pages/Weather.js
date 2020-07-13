import React, { Component } from 'react';
import axios from 'axios';
import {Card} from 'react-bootstrap'

class Weather extends Component {
constructor() {
    super();
    this.state = {
        temp: "",
        city: ""
    };
}
componentDidMount(){
    axios.get('https://api.openweathermap.org/data/2.5/weather?q=Riyadh&APPID=17fb5fb0eaaf777fa63a9d3ce7daa9c6')
    .then(res => {
        const temp = res.data.main.temp - 273.15;
        const city = res.data.name;
        this.setState({
            temp: temp,
            city: city
        });
    
    })
    .catch(err => {
        console.log(err);
    })
}
render(){
    return (
        <div>
            <Card bg='dark'>{this.state.city}   {this.state.temp}°C</Card>
        </div>
    )
}}

export default Weather;