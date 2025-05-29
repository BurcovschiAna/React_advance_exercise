import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../assets/1.jpg"
import img2 from "../assets/2.jpg"
import img3 from "../assets/3.jpg"
import img4 from "../assets/4.jpg"
import next from "../assets/arrow-right.svg"
import prev from "../assets/arrow-left.svg"


export default function Slider2 (){
  const Next = (props) => (
    <div className="arrow next" onClick={props.onClick}>
      <img src={next} alt="Next" />
    </div>
  );

  const Prev = (props) => (
    <div className="arrow prev" onClick={props.onClick}>
      <img src={prev} alt="Previous" />
    </div>
  );
  const settings = {
    customPaging: function(i) {
      return (
        <a className="custom-dots">
          <img src={data[i]} />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <Next/>,
    prevArrow: <Prev/>,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  }
  const data = [img1, img2, img3, img4]
  return (
    <div className="container2">
      <Slider {...settings}>
        {data.map((img) => (
          <div className="img-container2">
            <img src={img}/>
          </div>
        ))}
      </Slider>
    </div>
  );
}