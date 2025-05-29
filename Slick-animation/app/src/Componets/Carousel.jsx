import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../assets/1.jpg"
import img2 from "../assets/2.jpg"
import img3 from "../assets/3.jpg"
import img4 from "../assets/4.jpg"
import img5 from "../assets/5.jpg"
import img6 from "../assets/6.jpg"


export default function CarouselComp (){
  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
  const data = [
    {
      img : img1,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti architecto alias perspiciatis vitae voluptate eos commodi culpa libero ex sed dolore saepe eius cumque possimus non cum veritatis ea nemo aut corrupti, aperiam eveniet totam omnis sapiente! Vel, officia fugit."
    },
    {
      img : img2,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti architecto alias perspiciatis vitae voluptate eos commodi culpa libero ex sed dolore saepe eius cumque possimus non cum veritatis ea nemo aut corrupti, aperiam eveniet totam omnis sapiente! Vel, officia fugit."
    },
    {
      img : img3,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti architecto alias perspiciatis vitae voluptate eos commodi culpa libero ex sed dolore saepe eius cumque possimus non cum veritatis ea nemo aut corrupti, aperiam eveniet totam omnis sapiente! Vel, officia fugit."
    },
    {
      img : img4,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti architecto alias perspiciatis vitae voluptate eos commodi culpa libero ex sed dolore saepe eius cumque possimus non cum veritatis ea nemo aut corrupti, aperiam eveniet totam omnis sapiente! Vel, officia fugit."
    },
    {
      img : img5,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti architecto alias perspiciatis vitae voluptate eos commodi culpa libero ex sed dolore saepe eius cumque possimus non cum veritatis ea nemo aut corrupti, aperiam eveniet totam omnis sapiente! Vel, officia fugit."
    },
    {
      img : img6,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti architecto alias perspiciatis vitae voluptate eos commodi culpa libero ex sed dolore saepe eius cumque possimus non cum veritatis ea nemo aut corrupti, aperiam eveniet totam omnis sapiente! Vel, officia fugit."
    }
  ]
  return (
    <div className="container3">
      <Slider {...settings}>
        {data.map((item) => (
          <div className="img-container3">
            <img src={item.img}/>
            <div className="description3">
              {item.text}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}