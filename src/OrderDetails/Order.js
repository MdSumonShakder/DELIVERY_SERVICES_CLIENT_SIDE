import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';


const Order = () => {
  const { key } = useParams();
  const [details, setDetails] = useState([]);
  const [singleDetail, setSingleDetail] = useState({});
  useEffect(() => {
    fetch('/services.json')
      .then(res => res.json())
      .then(data => setDetails(data))
  }, []);

  useEffect(() => {
    if (details.length > 0) {
      const matchData = details.find(detail => detail.id == key)
      setSingleDetail(matchData);
    }


  }, [details]);


  return (
    <div>
      <h1 className="mt-5 text-primary">This is OrderDetail: {key}</h1>
      <h3 className="mt-3 text-dark">{singleDetail.name} </h3>
      <p className="mt-3 text-danger fw-bolder">{singleDetail.price}</p>
      <img className="box" src={singleDetail.img} alt="" />
    </div>
  );
};

export default Order;