import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Caro.css'
const f1 = '../../../public/food1.jpeg';
const f2 = '../../../public/food2.jpeg';
const f3 = '../../../public/food3.jpeg';


const Caro = () => {
    return (
        <div className='caro'>
              <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={f1}
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={f2}
          alt="Second slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={f3}
          alt="Third slide"
        />
           <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
    );
};

export default Caro;