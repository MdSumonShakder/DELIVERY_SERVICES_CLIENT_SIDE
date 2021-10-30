import React from 'react';
import tow1 from '../../../images/foot-img-1.png';
import tow2 from '../../../images/foot-img-2.png';
import tow3 from '../../../images/foot-img-3.png';
import tow4 from '../../../images/foot-img-4.png';
import tow5 from '../../../images/foot-img-5.png';
import tow6 from '../../../images/foot-img-6.png';
import { Card, CardGroup } from 'react-bootstrap';
import './Food.css';


const Food = () => {
  return (
    <div id="food" className="mb-5">
    <h1  className="gum mb-5 fw-bolder mt-5"> Our Special Foods</h1>
     <CardGroup>
  <Card>
    <Card.Img className="box" src={tow1} />
  </Card>
  <Card>
    <Card.Img className="box" src={tow2} />
  </Card>

  <Card>
    <Card.Img className="box" src={tow3} />
  </Card>

  <Card>
    <Card.Img className="box" src={tow4} />
  </Card>

  <Card>
    <Card.Img className="box" src={tow5} />
  </Card>

  <Card>
    <Card.Img className="box" src={tow6} />
  </Card>


</CardGroup>
      
    </div>
  );
};

export default Food;