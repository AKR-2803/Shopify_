import React, { useState } from "react"

const Head = () => {

  const [mode, setMode] = useState('light');

  const toggleMode = ()=>{
    let light = document.querySelector('#moon');
    // console.log(light);
    // console.log(light.classList);
    if (mode === 'light') {
      setMode('dark');
      light.classList.remove('fa-regular');
      light.classList.add('fa-solid'); 
    }
    else{
      setMode('light');
      light.classList.remove('fa-solid'); 
      light.classList.add('fa-regular');
      
    }
  }


  return (
    <>
      <section className='head'>
        <div className='container d_flex'>
          <div className='left row'>
            <i className='fa fa-phone'></i>
            <label> +91 80123457894</label>
            <i className='fa fa-envelope'></i>
            <label>aaryaveerrajput001@gmail.com</label>
          </div>
          <span><span style={{color: 'red'}}>NOTE : </span>This website is still under development, some features might not work</span>
          <div className='right row RText'>
            <label>FAQs</label>
            <label>Help</label>
            <label>EN</label>
            <label>India</label>
            <i id="moon" className="fa-regular fa-moon" onClick={toggleMode} mode={mode} ></i>
            {/* <i className="fa-solid fa-moon"></i> */}
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
