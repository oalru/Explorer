import React from 'react';
import {Container} from 'react-bootstrap'

const About = (props) => {
    return(
        <Container>
            <h3>To Connect and contatct with me, please choose one of the following Methods:</h3>
            <ul>
                <li><a href="https://www.twitter.com">Twitter</a></li>
                <li><a href="https://www.facebook.com">Facebook</a></li>
                <li><a href="https://www.linkedin.com">LinkedIn</a></li>
                <li><a href="https://www.github.com">Github</a></li>
            </ul>
        </Container>
    );
}

export default About;