import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../assets/1.jpg"
import img2 from "../assets/2.jpg"
import img3 from "../assets/3.jpg"
import img4 from "../assets/4.jpg"


export default function Slider1 (){
  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    waitForAnimate: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  }
  const data = [img1, img2, img3, img4]
  return (
    <div className="container1">
      <Slider {...settings}>
        {data.map((img) => (
          <div className="img-container1">
            <img src={img}/>
          </div>
        ))}
      </Slider>
    </div>
  );
}