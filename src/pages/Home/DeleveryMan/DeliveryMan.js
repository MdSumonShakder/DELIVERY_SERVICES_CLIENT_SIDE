import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import delivery1 from '../../../images/delivery-1.jpg';
import delivery2 from '../../../images/delivery-2.jpg';
import delivery3 from '../../../images/delivery-3.jpg';


const DeliveryMan = () => {
  return (
    <div id="deliveryman" className="container mt-5">
    <h1 className="gum mb-5 fw-bolder mt-5 pb-5">Our Free Home Delivery Boys</h1>
      <CardGroup>
  <Card className="m-4">
    <Card.Img variant="top" src={delivery1} />
    <Card.Body>
      <Card.Title> <h2 className=" text-info fw-bolder">JAMES BON</h2> </Card.Title>
      <Card.Text>
       <h4 className=" text-dark fw-bolder ">Contact our for all food free delivery from 5am to 12pm...</h4>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <h6 className=" text-danger fw-bolder">Contact Number : 796348124098</h6>
    </Card.Footer>
    </Card>
    <Card  className="m-4">
    <Card.Img variant="top" src={delivery3} />
    <Card.Body>
      <Card.Title> <h2 className=" text-info fw-bolder">MICHAEL</h2> </Card.Title>
      <Card.Text>
       <h4 className=" text-dark fw-bolder ">Contact our for all food free delivery from 12pm to 7:00pm...</h4>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <h6 className=" text-danger fw-bolder">Contact Number : 8458124128059</h6>
    </Card.Footer>
    </Card>
    <Card  className="m-4">
    <Card.Img variant="top" src={delivery2} />
    <Card.Body>
      <Card.Title> <h2 className=" text-info fw-bolder">DAVID JOHN</h2> </Card.Title>
      <Card.Text>
       <h4 className=" text-dark fw-bolder ">Contact our for all food free delivery from 7:00pm to 12am...</h4>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <h6 className=" text-danger fw-bolder">Contact Number : 40980584397349</h6>
    </Card.Footer>
    </Card>
</CardGroup>
    </div>
  );
};

export default DeliveryMan;