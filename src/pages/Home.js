import Testimonials from '../components/Testimonials';
import ExclusiveOffers from '../components/ExclusiveOffers';
import React from 'react';
import { Carousel } from 'react-bootstrap';
import PopularDishes from '../components/PopularDishes';

const Home = () => {
  return (
    <div>
      <Carousel fade className="mt-4">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1505253210343-d4fd4c52c1c8"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Award-Winning Flavors</h3>
            <p>Indulge in the iconic Gadbad and other classics.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1551024739-78e9d60c45ca"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>New Arrivals!</h3>
            <p>Try our tropical mango swirl and tiramisu delight.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1578985545062-69928b1d9587"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Happy Hours 🍦</h3>
            <p>Exciting offers every evening 4–6 PM!</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <PopularDishes />
<Testimonials />

    </div>
  );
};

export default Home;
