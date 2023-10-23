import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Container } from 'react-bootstrap';

const responsive = {
  0: { items: 1 },
  568: { items: 1 },
  800: { items: 2 },
  1024: { items: 3, itemsFit: 'contain' },
};

const items = [
  <div
    className="item"
    data-value="1"
    style={{
      overflow: 'hidden',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '25rem',
      width: '100%',
      // paddingRight: '5px',
      flexDirection: 'column',
    }}
  >
    <img
      src="assets/3.jpg"
      alt=""
      style={{
        width: '100%',
        height: 'auto',
      }}
    />
    <span
      style={{
        position: 'absolute',
        bottom: '10px',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '1.25rem',
      }}
    >
      Arms and armorer
    </span>
  </div>,
  <div
    className="item"
    data-value="2"
    style={{
      overflow: 'hidden',
      height: '25rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      paddingLeft: '5px',
    }}
  >
    <img
      src="assets/2.jpg"
      alt=""
      style={{
        width: '100%',
        height: 'auto',
        margin: '0 auto',
      }}
    />
  </div>,
  <div
    className="item"
    data-value="3"
    style={{
      overflow: 'hidden',
      height: '25rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      paddingLeft: '5px',
    }}
  >
    <img
      src="assets/4.jpg"
      alt=""
      style={{
        width: '100%',
        height: 'auto',
        margin: '0 auto',
      }}
    />
  </div>,
  <div
    className="item"
    data-value="4"
    style={{
      overflow: 'hidden',
      height: '25rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      paddingLeft: '5px',
    }}
  >
    <img
      src="assets/1.jpg"
      alt=""
      style={{
        width: '100%',
        height: 'auto',
        margin: '0 auto',
      }}
    />
  </div>,
  <div
    className="item"
    data-value="5"
    style={{
      overflow: 'hidden',
      height: '25rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      paddingLeft: '5px',
    }}
  >
    <img
      src="assets/5.jpg"
      alt=""
      style={{
        width: '100%',
        height: 'auto',
        margin: '0 auto',
      }}
    />
  </div>,
];

function Carousel() {
  return (
    <Container style={{ padding: '0', margin: '10px auto' }}>
      <AliceCarousel
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
        disableDotsControls
        disableSlideInfo="false"
      />
    </Container>
  );
}

export default Carousel;
