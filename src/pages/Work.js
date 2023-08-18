import React from 'react';
import { Carousel, Image, Container,  Row, Col } from 'react-bootstrap';


const Work = () => {
  return (
   <>
    <Container>
      <Row>
      <Col>
        <h2 className='display-1 fw-bold'>
           My Work
        </h2>
        <p>Here are some of the projects I've worked on:</p>
        <ul>
          <li>
            <h4>Food Ordering</h4>
            <p>Tech Stack:Html, CSS</p>
          </li>
          <li>
            <h4>Portal</h4>
            <p>Tech Stack: MongoDB, ExpressJS, ReactJS, NodeJs</p>
          </li>
          <li>
            <h4>Porfolio</h4>
            <p>Tech Stack: HTML, CSS, JS</p>
          </li>
        </ul>
      </Col>
      <Col>
      <div style={{minWidth:280}}>
      <Carousel>
        <Carousel.Item>
           <div style={{maxHeight:300}}>
            <Image src="/img-5.jpg" className="w-100 h-100 object-cover"/>
           </div>
          <Carousel.Caption>
            <h3>Food Ordering</h3>  
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{maxHeight:300}}>
            <Image src="/img-4.jpg" className="w-100 h-100 object-cover"/>
           </div>
          <Carousel.Caption>
            <h3>Portal</h3>  
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          
          <div style={{maxHeight:300}}>
            <Image src="img-3.png" className="w-100 h-100 object-cover"/>
           </div>
          <Carousel.Caption>
            <h3>Porfolio</h3>
           
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
      </Col>
    </Row>
    </Container>
   </>
  );
};

export default Work;
