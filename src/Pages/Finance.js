import React, { Component } from 'react';
import axios from 'axios';

class Finance extends Component {
    constructor() {
        super();
        this.state = {
            articles: []
        };
    }
    componentDidMount(){
        axios.get('https://stocknewsapi.com/api/v1/category?section=alltickers&items=50&token=vqgosjsfvoxkfptfgwfh5ddogra6s19l2otwweg5')
        .then(res => {
            const articles = res.data.data;
            this.setState({
                articles: articles,
            });
        })
        .catch(err => {
            console.log(err);
        })
    }
    render(){
        const tt = this.state.articles.map((news, i)=> {
            return <div>
                <h2 key={i}> {news.title}</h2>
            <p key={i}>{news.text}</p>
            </div>
        })
        return (
            <div>
                {tt}
            </div>
        )
    }}
    
    export default Finance;