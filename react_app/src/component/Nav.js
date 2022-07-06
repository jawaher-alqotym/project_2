import React from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function(){
 return (
      <Navbar className= 'ul' variant="dark" >
        <Container >
          <Nav >
            <Nav.Link as={Link} to="#" className="li "><span className='a'>Info</span></Nav.Link>
            <Nav.Link as={Link} to="/Cards" className="li"><span className='a'>Cites</span></Nav.Link>
            <Nav.Link as={Link} to="#" className="li"><span className='a'>Weather</span></Nav.Link>
            <Nav.Link as={Link} to="#"className="li" ><span className='a'>Services</span></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
 );
}