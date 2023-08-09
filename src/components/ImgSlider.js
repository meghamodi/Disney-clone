import React, { useState } from 'react'
import SimpleImageSlider from 'react-simple-image-slider'

const ImgSlider = () => {
  const [imageNum, setImageNum] = useState(3)
  const sliderImages = [
    {
      url: '/assets/icons/slider-badag.jpg',
    },
    {
      url: '/assets/icons/slider-badging.jpg',
    },
    {
      url: '/assets/icons/slider-scale.jpg',
    },
    {
      url: '/assets/icons/slider-scales.jpg',
    },
  ]
  return (
    <div>
      <h2>Slider Image</h2>
      <SimpleImageSlider
        width={1500}
        height={250}
        images={sliderImages}
        // showBullets={true}
        showNavs={true}
        autoPlay={true}
        onStartSlide={(index, length) => {
          setImageNum(index)
        }}
        autoPlayDelay={3}
      />
      {/* <div style={{ fontSize: '1.5rem' }}>
        The current image slide No is {imageNum}.
      </div> */}
    </div>
  )
}
export default ImgSlider
