import React from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';
import Banner from '../Banner/Banner';
import DeliveryMan from '../DeleveryMan/DeliveryMan';
import Food from '../Food/Food';
import Footer from '../Footer/Footer';
import Services from '../Services/Services';

const Home = () => {
  const {setLoading}=useAuth();
  if (setLoading) {
    return <Spinner animation="border" variant="danger" />
}
  return (
    <div id="home">
      <Banner></Banner>
      <DeliveryMan></DeliveryMan>
      <Services></Services>
      <Food></Food>
      <Footer></Footer>
     
    </div>
  );
};

export default Home;