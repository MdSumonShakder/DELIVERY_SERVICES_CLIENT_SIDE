
import React from 'react';
import { Navbar, Container, Nav, Button, Spinner } from 'react-bootstrap';
import logo from '../../../images/logo.png';
import { HashLink } from 'react-router-hash-link';
import useAuth from './../../../Hooks/useAuth';
import './Header.css';

const Header = () => {
  const { users,logOut,setLoading } = useAuth();
  if (setLoading) {
    return <Spinner animation="border" variant="danger" />
}
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light bg-dark" variant="dark" sticky="top">
        <Container>


          <Navbar.Brand href="#home"> <img className="png" src={logo} alt="" /></Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end fw-bolder">
            <Nav.Link className="text-white man" as={HashLink} to="/home#home">Home</Nav.Link>
            <Nav.Link className="text-white man" as={HashLink} to="/home#deliveryman">DeliveryMan</Nav.Link>
            <Nav.Link className="text-white man" as={HashLink} to="/home#services">Services</Nav.Link>
            <Nav.Link className="text-white man" as={HashLink} to="/home#food">SpecialFood</Nav.Link>
            <Nav.Link className="text-white man" as={HashLink} to="/pricing">Pricing</Nav.Link>
            <Nav.Link className="text-white man" as={HashLink} to="/gallery">Gallery</Nav.Link>
            <Nav.Link className="text-white man" as={HashLink} to="/delete">DeleteOrder</Nav.Link>
            <Nav.Link className="text-white man" as={HashLink} to="/home#footer">Footer</Nav.Link>
            
           {
             users?.email ? 
                <Button className="fw-bold mx-4" onClick={logOut}>LogOut</Button> 
                :
            <Nav.Link className="text-white" as={HashLink} to="/login">Login</Nav.Link>
             
              }

            <Navbar.Text className="text-white fw-bolder">Sing In: <a className="text-warning" href="#login">{users?.displayName}</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>
  );
};

export default Header;