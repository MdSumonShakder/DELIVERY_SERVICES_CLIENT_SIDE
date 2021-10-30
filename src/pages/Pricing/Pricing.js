import React from 'react';
import { Card, ListGroup, ListGroupItem, Nav } from 'react-bootstrap';
import BREAKFAST from '../../images/breakfast.jpg';
import Lunch from '../../images/lance.jpg';
import Dinner from '../../images/dinner.jpg';
import './Pricing.css';



const Pricing = () => {
  return (
    <div>
    <div className="container">
    <h1 className="gum mb-5 fw-bolder mt-5">Our Food Prices</h1>
    <div className="price">
      <div className="cad m-4">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={BREAKFAST} />
          <Card.Body className="bg-info">
            <Card.Title className=" text-danger fw-bold">BREAKFAST</Card.Title>
            <p className="fw-bold text-white">Great For Small Business</p>
            <h1 className="fw-bolder">$:30</h1>
          </Card.Body>
          <ListGroup className="list-group-flush">
          <ListGroupItem>Bread</ListGroupItem>
            <ListGroupItem>Pulses</ListGroupItem>
            <ListGroupItem>Tomatoes</ListGroupItem>
            <ListGroupItem>Cucumbers</ListGroupItem>
            <ListGroupItem>Water</ListGroupItem>
          </ListGroup>
          <Card.Body>
          <Nav to="/home">
           <button className="btn btn-warning  mx-auto fw-bolder">Order Now</button>
           </Nav>
          </Card.Body>
        </Card>
      </div>
      <div className="cad m-4">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={Lunch} />
          <Card.Body className="bg-info">
            <Card.Title className=" text-danger fw-bold">Lunch</Card.Title>
            <p className="fw-bold  text-white">Great For Small Business</p>
            <h1 className="fw-bolder">$:50</h1>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Rice</ListGroupItem>
            <ListGroupItem>Fish</ListGroupItem>
            <ListGroupItem>Chicken</ListGroupItem>
            <ListGroupItem>Tomatoes</ListGroupItem>
            <ListGroupItem>Cucumbers</ListGroupItem>
          </ListGroup>
          <Card.Body>
          <Nav to="/">
           <button className="btn btn-warning  mx-auto fw-bolder">Order Now</button>
           </Nav>
          </Card.Body>
        </Card>
      </div>
      <div className="cad m-4">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={Dinner} />
          <Card.Body className="bg-info">
            <Card.Title className="text-danger fw-bold">Dinner</Card.Title>
            <p className="fw-bold  text-white">Great For Small Business</p>
            <h1 className="fw-bolder">$:20</h1>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Milk</ListGroupItem>
            <ListGroupItem>Eggs</ListGroupItem>
            <ListGroupItem>Tomatoes</ListGroupItem>
            <ListGroupItem>Cucumbers</ListGroupItem>
            <ListGroupItem>Water</ListGroupItem>
          </ListGroup>
          <Card.Body>
          <Nav to="/">
           <button className="btn btn-warning  mx-auto fw-bolder">Order Now</button>
           </Nav>
          </Card.Body>
        </Card>
      </div>
  
    </div>
    
    </div>
   
    </div>
  );
};

export default Pricing;