import React from 'react';
import Banner from '../Banner/Banner';
import DeliveryMan from '../DeleveryMan/DeliveryMan';
import Food from '../Food/Food';
import Footer from '../Footer/Footer';
import Services from '../Services/Services';

const Home = () => {
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