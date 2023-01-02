import React from "react"
import "./style.css"

const Cart = ({ CartItem, addToCart, decreaseQty }) => {
  const totalPrice = CartItem.reduce((price, item) => price + item.qty * item.price, 0)

  return (
    <>
      <section className='cart-items'>
        <div className='container d_flex'>
         

          <div className='cart-details'>
            {CartItem.length === 0 && <h1 className='no-items product'>OOPS, No items to show in Cart</h1>}

            {CartItem.map((item) => {
              const productQty = item.price * item.qty

              return (
                <div className='cart-list product d_flex' key={item.id}>
                  <div className='img'>
                    <img src={item.cover} alt='' />
                  </div>
                  <div className='cart-details'>
                    <h3>{item.name}</h3>
                    <h4>
                      ₹{item.price}.00 * {item.qty}
                      <span>₹{productQty}.00</span>
                    </h4>
                  </div>
                  <div className='cart-items-function'>
                    <div className='removeCart'>
                      <button className='removeCart'>
                        <i className='fa-solid fa-xmark'></i>
                      </button>
                    </div>

                    <div className='cartControl d_flex'>
                      <button className='incCart' onClick={() => addToCart(item)}>
                        <i className='fa-solid fa-plus'></i>
                      </button>
                      <button className='desCart' onClick={() => decreaseQty(item)}>
                        <i className='fa-solid fa-minus'></i>
                      </button>
                    </div>
                  </div>

                  <div className='cart-item-price'></div>
                </div>
              )
            })}
          </div>

          <div className='cart-total product'>
            <h2>Cart Summary</h2>
            <div className='billing d_flex'>
              <h4>Total Price :</h4>
              <h3>₹{totalPrice}</h3>
            </div>
            <div className='billing d_flex'>
              <h4>GST (0.5% CGST + 0.5% SGST) :</h4>
              <h3>₹{parseInt(totalPrice*0.01)}</h3>
            </div>
            <div id="totalAmount" className='billing d_flex'>
              <h4>Total Amount :</h4>
              <h3>₹{parseInt(1.18 * totalPrice)}</h3>
            </div>


            <div className='cart-details'>
            
              {CartItem.length === 0 ? <button id="PayNow" className='btn-primary w-25 displayNone'>Pay Now</button>  : <button id="PayNow" className='btn-primary w-25'>Pay Now</button> }
              
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Cart
