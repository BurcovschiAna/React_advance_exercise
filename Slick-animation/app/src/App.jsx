import Slider1 from "./Componets/Slider1";
import Slider2 from "./Componets/Slider2";
import CarouselComp from "./Componets/Carousel";
import VerticalCarousel from "./Componets/VerticalCarousel"
import { Route, Routes,  Link} from 'react-router-dom';
import "./App.css"
export default function App (){
  return (
    <>
      <div className="nav">
          <Link to="/">Slider 1</Link>
          <Link to="/Slider2">Slider 2</Link>
          <Link to="/Carousel">Carousel</Link>
           <Link to="/Vertical">Vertical carousel</Link>
      </div>
        <Routes>
          <Route path="/" element={<Slider1/>} />
          <Route path='/Slider2' element={<Slider2/>} />
          <Route path='/Carousel' element={<CarouselComp/>} />
          <Route path='/Vertical' element={<VerticalCarousel/>} />
        </Routes>
    </>
  )
}