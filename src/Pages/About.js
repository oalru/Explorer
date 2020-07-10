import React from 'react';
import {Container} from 'react-bootstrap'

const About = (props) => {
    return(
        <Container>
            <h3>To Reach Me, Please Choose one of the following Channels:</h3>
            
                <div><a href="https://www.twitter.com"><img height="50px" src="https://image.flaticon.com/icons/svg/174/174876.svg"/></a></div>
                <div><a href="https://www.facebook.com"><img height="50px" src="https://image.flaticon.com/icons/svg/174/174848.svg"/></a></div>
                <div><a href="https://www.linkedin.com"><img height="50px" src="https://image.flaticon.com/icons/svg/145/145807.svg"/></a></div>
                <div><a href="https://www.github.com"><img height="50px" src="https://image.flaticon.com/icons/svg/2111/2111425.svg"/></a></div> 
            
        </Container>
    );
}

export default About;