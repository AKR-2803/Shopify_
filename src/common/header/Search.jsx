import React from "react"
import { Link } from "react-router-dom"

const Search = ({ CartItem }) => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search")
    search.classList.toggle("active", window.scrollY > 200)
  })

  return (
    <>
      <section className='search'>
        <div className='container c_flex'>
          <div className='logo width'>
            <h2>🛍️SHOPIFY</h2>

          </div>
            <h2 style={{marginTop: "10px"}}>Electronics, fashion, home essentials, groceries, and lifestyle products <br />and much more....</h2>

          {/* <div className='search-box f_flex'>
            <i className='fa fa-search'></i>
            <input type='text' placeholder='Search for products, brands and more'/>
          </div> */}
          
          <div className='icon f_flex width'>
          <Link to='/LoginForm'>
            <i id="userIcon" className='fa fa-user icon-circle'></i>
            </Link>
            <div className='cart'>
              <Link to='/cart'>
                <i className='fa fa-shopping-bag icon-circle'></i>
                <span>{CartItem.length === 0 ? "0" : CartItem.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Search
