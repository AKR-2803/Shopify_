import React from "react"
import "./style.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid2'>
          <div className='box'>
            <h1>SHOPIFY</h1>
            <p>This is a sample ecommerce website still under developement.</p>
            <div className='icon d_flex'>
              <div className='img d_flex'>
                <i className='fa-brands fa-google-play'></i>
                <span>Google Play Store</span>
              </div>
              {/* <div className='img d_flex'>
                <i className='fa-brands fa-app-store-ios'></i>
                <span>App Store</span>
              </div> */}
            </div>
          </div>

          <div className='box'>
            <h2>About Us</h2>
            <ul className="ulElements">
              <li>Careers</li>
              <li>Our Stores</li>
              <li>Our Cares</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Customer Care</h2>
            <ul className="ulElements">
              <li>Help Center </li>
              <li>How to Buy </li>
              <li>Track Your Order </li>
              <li>Corporate & Bulk Purchasing </li>
              <li>Returns & Refunds </li>
            </ul>
          </div>
          <div className='box'>
            <h2>Contact Us</h2>
            <ul >
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim tempora ipsam quasi fuga reprehenderit sit fugit expedita dolorum error nostrum!</li>
              <li>Email: aaryaveerrajput001@gmail.com</li>
              <li>Phone: 079 292932302302</li>
            </ul>
          </div>
        </div>
             <div style={{textAlign: "center", marginTop: "60px", marginBottom: "-50px"}}>
              ©2022 Aaryaveer Rajput
            </div> 
      </footer>
    </>
  )
}

export default Footer
