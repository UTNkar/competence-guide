//Carousel
import Carousel from "react-bootstrap/Carousel";

export default function SlideOne() {
    return(
    // <Carousel.Item>
    //     <div style={{width: "500px"}}>Ja</div>
    //     <Carousel.Caption>
    //         <h3>hej </h3>
    //     </Carousel.Caption>
    // </Carousel.Item>
    <Carousel.Item>
    <img
        className="d-block w-100"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/640px-A_black_image.jpg"
        alt="First slide"
      />

      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    )

  }

