import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import '../CSS/Carousel.css';
import { Link } from 'react-router-dom';

const responsive = {
  0: { items: 1, itemsFit: 'contain' },
  568: { items: 1, itemsFit: 'contain' },
  900: { items: 2.5, itemsFit: 'contain' },
  1124: { items: 3.5, itemsFit: 'contain' },
};

const items = [
  <div className="item" data-value="1">
    <img className="carousel-img" src="assets/3.jpg" alt="" />
    <Link to={'/categories/search/Ritual dish'} className="carousel-link">
      Ritual dish
    </Link>
  </div>,
  <div className="item" data-value="2">
    <img className="carousel-img" src="assets/2.jpg" alt="" />
    <Link to={'/categories/search/Kettles'} className="carousel-link">
      Kettles
    </Link>
  </div>,
  <div className="item" data-value="3">
    <img className="carousel-img" src="assets/4.jpg" alt="" />
    <Link to={'/categories/search/Masks'} className="carousel-link">
      Masks
    </Link>
  </div>,
  <div className="item" data-value="4">
    <img className="carousel-img" src="assets/1.jpg" alt="" />
    <Link to={'/categories/search/Furniture'} className="carousel-link">
      Furniture
    </Link>
  </div>,
  <div className="item" data-value="5">
    <img className="carousel-img" src="assets/5.jpg" alt="" />
    <Link to={'/categories/search/Armorer'} className="carousel-link">
      Armorer
    </Link>
  </div>,
];

function Carousel() {
  return (
    <AliceCarousel
      items={items}
      responsive={responsive}
      controlsStrategy="alternate"
      disableDotsControls
      disableSlideInfo="false"
    />
  );
}

export default Carousel;
