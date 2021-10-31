import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';



const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('https://dark-broomstick-22701.herokuapp.com/Order')
      .then(res => res.json())
      .then(data => setServices(data));
  }, []);
  return (
    <div id="services" className="container mb-5 mt-5">
      <div className="container">
        <div className="row">
          <h1 className="gum mb-5 fw-bolder pb-5">Our Fast And Free Home Delivery Services</h1>
          {
            services.map(service => <Service

              key={service.id}
              service={service}

            ></Service>)
          }

        </div>

      </div>
    </div>
  );
};

export default Services;