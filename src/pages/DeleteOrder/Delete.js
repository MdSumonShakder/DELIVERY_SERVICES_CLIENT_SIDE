import React, { useEffect, useState } from 'react';



const Delete = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/Order`)
      .then(res => res.json())
      .then(data => setServices(data));
  }, []);


  const clickedDelete = id => {
    const url = `http://localhost:5000/Order/${id}`;
    fetch(url, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.deletedCount) {
          alert('DELETE SUCCESSFULLY');
        }
        const remaining = services.filter(service => service.id !== id)
        setServices(remaining);
      })
  }

  return (
    <div>
      <h1 className="gum text-primary fw-bolder mt-3 pb-5">ORDER DELETE </h1>
      {
        services.map(service => <div key={service.id}>

          <h3>{service.name}</h3>
          <p className="mt-3 mb-5 text-danger fw-bolder">{service.price}</p>
          <img className="box" src={service.img} alt="" /> <br /> <br />


          <button onClick={() => clickedDelete(service.id)} className="btn btn-primary mb-5 fw-bolder">DELETE NOW</button>


        </div>)
      }

    </div>
  );
};

export default Delete;