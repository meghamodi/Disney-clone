import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function ImgSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <Carousel {...settings}>
      <Wrap>
        <img src='/assets/icons/slider-badging.jpg' alt='imag1' />
      </Wrap>
      <Wrap>
        <img src='/assets/icons/slider-scale.jpg' alt='imag2' />
      </Wrap>
      <Wrap>
        <img src='/assets/icons/slider-badag.jpg' alt='imag3' />
      </Wrap>
      <Wrap>
        <img src='/assets/icons/slider-scales.jpg' alt='imag4' />
      </Wrap>
    </Carousel>
  )
}
export default ImgSlider

const Carousel = styled(Slider)`
  margin-top: 20px;
  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(250, 158, 171);
    }
  }
  li.slick-active button:before {
    color: white;
  }
  .slick-list {
    overflow: visible;
  }
  button {
    z-index: 1;
  }
`

const Wrap = styled.div`
  cursor: pointer;
  img {
    border: 4px solid transparent;
    border-radius: 4px;
    width: 100%;
    height: 100%;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition-duration: 300ms;
    &:hover {
      border: 4px solid rgba(249, 249, 249, 0.8);
    }
  }
`
