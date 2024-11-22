
import React from 'react';
import Hero from './components/Hero';
import Product from './components/Product';
import Arrivals from './components/Arrivals';
import Offers from './components/Offers';
import Collection from './components/Collection';


const Home= () => {
  return (
    <div>
      <Hero />
      <Product />
      <Arrivals />
      <Offers />
      <Collection />
    
    </div>
  );
};

export default Home;
