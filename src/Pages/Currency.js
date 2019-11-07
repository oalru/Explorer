import React, { Component } from 'react';
import axios from 'axios';
import {Button, Container, InputGroup, FormControl, select} from 'react-bootstrap'

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
                return <option key={i} value={cur}>{cur}</option>
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
            this.setState({
                amount: amount,
                result: res.data.rates[this.state.target].rate_for_amount
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
            <Container>
                <div className="converter">
                    <div className='curHead'>Currency Converter</div>
                    <br></br>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text>SAR</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl aria-label="Amount" as="input"  type="numeric" placeholder="Amount" value={this.state.amount} onChange={this.onTextBoxChange} />
                    </InputGroup> 
                    <br></br>
                        <p>TO</p>
                <br></br>
                <select className="form-control show-menu-arrow" id="sel1" onChange={this.choosenCur}>{this.state.to}</select>
                <br></br>
                <Button text="white" variant="dark" onClick={this.getData}>Convert</Button>
                <br></br>
                <div className="results">{this.state.result}</div>
            </div>
            </Container>
        )}
    }
    export default Converter;