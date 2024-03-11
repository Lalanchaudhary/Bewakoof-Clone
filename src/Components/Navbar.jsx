import React from 'react';
import '../Css/Navbar.css'
import { Navbar, Nav, Form, FormControl, Container,Image, } from 'react-bootstrap';
function CustomNavbar() {
  return (
    <>
    <Container className='navbar1' fluid>
<Navbar bg="light" expand="lg" >
  <Container>
  <Navbar.Brand href="#home"  className='mr-4 mb-2'><Image src='https://images.bewakoof.com/web/ic-desktop-bwkf-trademark-logo.svg' height={20}/></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto ml-4">
      <Nav.Link href='#home' className='text-dark'>Men</Nav.Link>
      <Nav.Link href="#link"  className='text-dark'>Women</Nav.Link>
      <Nav.Link href="#link" className='text-dark'>Mobile Cover</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  <Form className='d-flex align-items-center'>
   <FormControl  type='text' className='p-2 pl-4'  placeholder='Search' inline></FormControl>
   <div className='icons'>
   <Nav.Link className='icons2'  href='#login'>Login</Nav.Link>
   </div>
  </Form>
  </Container>
</Navbar>
</Container>

</>
  );
}

export default CustomNavbar;
