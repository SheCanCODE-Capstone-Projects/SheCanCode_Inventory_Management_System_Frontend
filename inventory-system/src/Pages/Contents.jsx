
import React, { useEffect } from 'react'
import '../styles/dashbaord.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser} from '@fortawesome/free-solid-svg-icons'
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
        <h1 className=' basic-1/2 float-left  items-center mr-44 text-white text-4xl  ml-12 mt-6 delay-[100ms] duration-[600ms] ' data-aos="fade-down"><b>Dashboard/Admin</b></h1>
        <FontAwesomeIcon icon={faUser}  size="xl" className=' icon-user  basic-1/2 float-right mt-8	 ml-3   text-white   '/>
      </div>
  );
}

export default Contents;
