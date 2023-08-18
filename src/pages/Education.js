import React from 'react';
import {Accordion, Container} from 'react-bootstrap';


const Education = () => {
  return (
   <>
    <Container>
      <h2 className='display-1 fw-bold text-center'>My Education</h2>
      <p className='text-center'>These are my academic qualifications:</p>
      <hr/>
      <Container className='p-5'>
      <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Tuliao Elementary School |  S.Y.2008-2015</Accordion.Header>
        <Accordion.Body>
       154 Zone 4, Tuliao, Santa Barbara, Pangasinan

        

        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Tuliao National High School | S.Y.2015-2021</Accordion.Header>
        <Accordion.Body>
        154 Zone 4, Tuliao, Santa Barbara, Pangasinan


         
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>PHINMA Upang University Pangasinan | Current</Accordion.Header>
        <Accordion.Body>
        154 Zone 4, Tuliao, Santa Barbara, Pangasinan


        
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
      </Container>
    </Container>
   </>
  );
};

export default Education;
