import React, {useState} from "react";
import { CarouselItem } from "../CarouselComponents/CarouselItem";
import { Carousel, Row, Col } from 'react-bootstrap';
import ExamplePie from "../CarouselComponents/ExamplePie";
import ExampleBar from "../CarouselComponents/ExampleBar";




function TestCarousel() {
  const carouselData = [
    {
      id: 1,
      component: <ExamplePie/>,
      title: 'First slide label',
      description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
    },
    {
      id: 2,
      component: <ExampleBar/>,
      title: 'Second slide label',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
        id:3,
        component: <ExamplePie/>,
        title: 'third slide label',
        description: 'Lorem ',
    }
    // Add more carouselData objects for additional slides
  ];

  return (
    <Carousel 
    prevIcon={<span style={{ color: 'blue', fontSize: '24px' }}>&#8249;</span>}
    nextIcon={<span style={{ color: 'blue', fontSize: '24px' }}>&#8250;</span>}
    >
      {carouselData.map((item) => (
        <Carousel.Item key={item.id} style = {{height : '500px', width: '500 px'}}>
        <Row className="align-items-center justify-content-center" style={{ height: '300px' }}>
            <Col xs={15} className="text-center">
              {item.component}
            </Col>
          </Row>
        
        
          <Carousel.Caption>
            <h3 style = {{color: 'blue'}}>{item.title}</h3>
            <p style = {{color: 'red' }} >{item.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default TestCarousel;