import React from 'react';
import {Container} from 'react-bootstrap'
// import {twitter, facebook, linkedin, github} from './Images';

const About = (props) => {
    return(
        <Container>
            <h3>To Reach Me, Please Choose one of the following Channels:</h3>
            <ul>
                {/* <li><a href="https://www.twitter.com"><img src={twitter}/></a></li>
                <li><a href="https://www.facebook.com"><img src={facebook}/></a></li>
                <li><a href="https://www.linkedin.com"><img src={linkedin}/></a></li>
                <li><a href="https://www.github.com"><img src={github}/></a></li> */}
            </ul>
        </Container>
    );
}

export default About;