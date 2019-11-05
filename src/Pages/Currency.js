import React, { Component } from 'react';
import axios from 'axios';

class Converter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: '',
            to: [],
            result: 0,
            target: ""
        };
    }
    componentDidMount(){
        axios({
            method: 'GET',
            url: `https://currency-converter5.p.rapidapi.com/currency/convert?format=json&from=SAR&to=&amount=${this.state.amount}`,
            headers: {'X-RapidAPI-Key': '373a0f400amsh0d176c1631aeec3p194d21jsnd1559ece83af'}
        })
        .then(res => {
            
            const to = Object.keys(res.data.rates);
            
            const curencies = to.map((cur,i)=>{
                
                return <option value={cur}>{cur}</option>
            })
            this.setState({
                to: curencies
            })
        })
        .catch(err => {
            console.log(err);
        })
    }
    getData = ()=> {
        axios({
            method: 'GET',
            url: `https://currency-converter5.p.rapidapi.com/currency/convert?format=json&from=SAR&to=${this.state.target}&amount=${this.state.amount}`,
            headers: {'X-RapidAPI-Key': '373a0f400amsh0d176c1631aeec3p194d21jsnd1559ece83af'}
        })
        .then(res => {
            const amount = res.data.amount;
            console.log(res.data);
            this.setState({
                amount: amount,
                result: this.state["rate_for_amount"]
            });
            })
        .catch(err => {
            console.log(err);
        })
    }
    choosenCur = (e) => {
        this.setState({
            target: e.target.value,
        })
    }
    onTextBoxChange = (e) => {
        this.setState({
          amount: e.target.value
        });
      }
    render(){
            return (
                <div>
                    <p>SAR</p>
                    <input type="number" placeholder="Amount" value={this.state.amount} onChange={this.onTextBoxChange}/>
                    <p>TO</p>
                    <button onClick={this.getData}>Convert</button>
                    <select onChange={this.choosenCur}>{this.state.to}</select>
                    <div>{this.state.result}</div>
                </div>
            )}
    }

    export default Converter;