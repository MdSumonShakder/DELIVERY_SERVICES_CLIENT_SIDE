import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';


const Order = () => {
  const { key } = useParams();
  const [details, setDetails] = useState({});
 
  useEffect(() => {
    fetch(`http://localhost:5000/Order/${key}`)
      .then(res => res.json())
      .then(data => setDetails(data))
  }, []);

  
  return (
    <div>
      <h1 className="gum text-primary">This is OrderDetail:{key}</h1>
      <h3 className="mt-3 text-dark"><b className=" text-danger">NAME</b> : {details.name} </h3>
      <p className="mt-3 text-danger fw-bolder">{details.price}</p>
      <img className="box" src={details.img} alt="" /> <br /> <br />
<Link to="/delete">
<button className="btn btn-danger mt-3 text-white fw-bold">CANCEL ORDER</button>
</Link>
    </div>
  );
};

export default Order;