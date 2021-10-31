import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner-1.png';
import banner2 from '../../../images/banner-2.png';
import banner3 from '../../../images/banner-3.png';
import banner4 from '../../../images/banner-4.png';
import banner5 from '../../../images/banner-5.png';
import banner6 from '../../../images/banner-6.png';

const Banner = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Eat good food and stay healthy</h3>
            <p className="text-warning fw-bolder">In congue lorem dignissim leo lacinia efficitur  nam suscipit  viverra vel <br />cras cursus porta porttitor.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner2}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Eat good food and stay healthy</h3>
            <p className="text-warning fw-bolder">In congue lorem dignissim leo lacinia efficitur  nam suscipit  viverra vel <br />cras cursus porta porttitor.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner3}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Eat good food and stay healthy</h3>
            <p className="text-warning fw-bolder">In congue lorem dignissim leo lacinia efficitur  nam suscipit  viverra vel <br />cras cursus porta porttitor.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner4}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Eat good food and stay healthy</h3>
            <p className="text-warning fw-bolder">In congue lorem dignissim leo lacinia efficitur  nam suscipit  viverra vel <br />cras cursus porta porttitor.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner5}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Eat good food and stay healthy</h3>
            <p  className="text-primary fw-bolder">Get special  newsletter to get free updates training this summer 50% off pay now.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner6}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 className="text-light fw-bolder">Exercise and stay healthy</h3>
            <p  className="text-info fw-bolder">Subscribe our newsletter to get free updates Get special  newsletter to get
.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;