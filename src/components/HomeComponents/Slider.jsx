import { useState, useEffect, Fragment } from "react";
import { Grid, Button, Link, Typography } from "@mui/material";
//Carousel
import Carousel from "react-bootstrap/Carousel";

//All Charts
// import { Pie } from "react-chartjs-2";
import ExamplePie from "../CarouselComponents/ExamplePie";
import ExampleBar from "../CarouselComponents/ExampleBar";


//MUI
// import { Grid, List, ListItem, ListItemText, Typography } from "@mui/material";

//Imports slider component
import SlideOne from "../CarouselComponents/SlideOne";
import { MDBContainer } from "mdbreact";



const Slider = () => {
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  

  return (
    <div>
      <Carousel>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/640px-A_black_image.jpg"
            alt="First slide"
          />
          
          <Carousel.Caption>
          <ExamplePie/>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            
          </Carousel.Caption>
        </Carousel.Item>
        {/* <SlideOne/> */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/640px-A_black_image.jpg"
            alt="First slide"
          />

          <Carousel.Caption>
            <ExampleBar/>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.macmillandictionary.com/external/slideshow/full/White_full.png"
            alt="First slide"
          />

          <Carousel.Caption>
          <Typography variant="body1" color="black" gutterBottom>
            third slide
          </Typography>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
