import React, { useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const SampleNextArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='next'>
        <i className='fa fa-long-arrow-alt-right'></i>
      </button>
    </div>
  )
}
const SamplePrevArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='prev'>
        <i className='fa fa-long-arrow-alt-left'></i>
      </button>
    </div>
  )
}
const FlashCard = ({ productItems, addToCart }) => {
  const [count, setCount] = useState(0)
  // let like = document.getElementById('heart');
  // console.log(like.classList()) ;
  const increment = () => {
    if(count === 0){
      setCount(1);
    }
    else{
      setCount(0);
    }
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }

  return (
    <>
      <Slider {...settings}>
        {productItems.map((productItems) => {
          return (
            <div className='RenderFlash box' key={productItems.id}>
              <div className='product mtop'>
                <div className='img'>
                  <span className='discount'>{productItems.discount}% Off</span>
                  <img src={productItems.cover} alt='' />
                  <div className='product-like'>
                    <label>{count}</label> <br />
                    <i id="heart" className='fa-regular fa-heart' onClick={increment}></i>
                  </div>
                </div>
                <div className='product-details'>
                  <h3 style={{marginTop: "15px"}}>{productItems.name}</h3>
                  <div className='rate'>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa-regular fa-star'></i>
                  </div>
                  <div className='price'>
                    <h4>₹{productItems.price}</h4>
                    <h4 style={{textDecoration: "line-through"}}>₹{parseInt(productItems.price/(1-0.01*productItems.discount))}</h4>
                    <button onClick={() => addToCart(productItems)}>
                      <i className='fa fa-plus'></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </Slider>
    </>
  )
}

export default FlashCard
