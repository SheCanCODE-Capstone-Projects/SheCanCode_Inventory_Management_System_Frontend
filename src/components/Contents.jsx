
import React, { useEffect } from 'react'
import './dashbaord.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
function Contents() {
  useEffect(()=>{
    AOS.init({duration:2000})
},
[])
  return (
    <div className='content--header'>
      <h1 className='header--title  delay-[300ms] duration-[600ms]'  data-aos="fade-down">Dashboard-Admin</h1>
    </div>
  );
}

export default Contents;
