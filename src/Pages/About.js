import React from 'react';
import {Image, Container} from 'react-bootstrap'

const About = () => {
    return(
        <Container>

                <a href="https://www.twitter.com"><Image width={150} height={140} src="https://image.flaticon.com/icons/svg/174/174876.svg"/></a>
                <a href="https://www.facebook.com"><Image width={150} height={140} src="https://image.flaticon.com/icons/svg/174/174848.svg"/></a>
                <a href="https://www.linkedin.com"><Image width={150} height={140} src="https://image.flaticon.com/icons/svg/145/145807.svg"/></a>
                <a href="https://www.github.com"><Image width={150} height={140} src="https://image.flaticon.com/icons/svg/2111/2111425.svg"/></a> 
            
        </Container>
    );
}

export default About;