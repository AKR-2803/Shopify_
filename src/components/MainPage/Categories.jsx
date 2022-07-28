import React from "react"

const Categories = ({index, setIndex}) => {

  const data = [
    {
      cateImg: "./images/category/cat1.png",
      cateName: "Fashion",
    },
    {
      cateImg: "./images/category/cat2.png",
      cateName: "Electronics",
    },
    {
      cateImg: "./images/category/cat3.png",
      cateName: "Cosmetics",
    },
    {
      cateImg: "./images/category/cat5.png",
      cateName: "Furniture",
    },
    {
      cateImg: "./images/category/cat6.png",
      cateName: "Travel",
    },
    {
      cateImg: "./images/category/cat3.png",
      cateName: "Grocery",
    },
    {
      cateImg: "./images/category/cat3.png",
      cateName: "Toys",
    }
  ]

  return (
    <>
      <div style={{height: "auto", marginRight:"30px"}} className='category'>
        {data.map((value, index) => {
          return (
            <div className='categoriesList box f_flex' key={index} onClick = {()=>{setIndex(index+1)}}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>




    </>
  )
}

export default Categories
