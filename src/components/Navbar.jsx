import React, { useEffect } from 'react'
import AOS from 'aos'
import Logo from '../assets/logo.png'
import 'aos/dist/aos.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import {faMoneyBillTransfer } from '@fortawesome/free-solid-svg-icons'
import {faListCheck } from '@fortawesome/free-solid-svg-icons'
import {faClipboardList} from '@fortawesome/free-solid-svg-icons'
import {faGear} from '@fortawesome/free-solid-svg-icons'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
const Navbar = () =>{
    useEffect(()=>{
        AOS.init({duration:2000})
    },
    [])
return ( 
 <>
    <div className='flex flex-row'> 
     <div className='main-navbar w-1/5   basics-1/2 '>
        <div className='ml-20 pt-20 w-4/12 h-24'>
          <img src={Logo} className='size-min  shadow-2xl shadow-black-500/40 ' alt='home vector' data-aos="fade-right" />
        </div>
        <div className=' navbar-nav' >
          <div className=" flex flex-row delay-[100ms] duration-[600ms] " data-aos="fade-down">
            <FontAwesomeIcon icon={faHome}  size="xl" className='text-gray-400  basics-1/2 mr-2 '/>
            <Link to='/Home'><div className=' home basics-1/2 ml-4 text-white  mt-1 '>Home</div></Link>
           
          </div>
          <div className=' flex flex-row mt-11 delay-[200ms] duration-[600ms] ' data-aos="fade-down">
              <FontAwesomeIcon icon={faUsers}  size="xl" className='text-gray-400  basics-1/2 mr-2 '/>
              <Link to='/User'><div className=' home basics-1/2 ml-4 text-white  mt-1 '>Users</div></Link>
          </div>
          <div className=' flex flex-row mt-11 delay-[300ms] duration-[600ms] ' data-aos="fade-down">
            <FontAwesomeIcon icon={faMoneyBillTransfer} size="xl" className='text-gray-400  basics-1/2 mr-2 '/>
            <div className=' basics-1/2 ml-4 text-white  mt-1'>Finance</div>
          </div>
          <div className=' flex flex-row mt-11 delay-[400ms] duration-[600ms] ' data-aos="fade-down">
            <FontAwesomeIcon  icon={faListCheck} size="xl" className='text-gray-400  basics-1/2 mr-2 '/>
            <div className=' basics-1/2 ml-4 text-white  mt-1'>Operation</div>
          </div>
          <div className=' flex flex-row mt-11 delay-[500ms] duration-[600ms] ' data-aos="fade-down">
            <FontAwesomeIcon icon={faClipboardList}  size="xl" className='text-gray-400  basics-1/2 mr-2 '/>
            <div className=' basics-1/2 ml-6 text-white  mt-1'>Report</div>
          </div>
          <div className=' flex flex-row mt-11 delay-[600ms] duration-[600ms] ' data-aos="fade-down">
            <FontAwesomeIcon icon={faGear}  size="xl" className='text-gray-400  basics-1/2 mr-2 '/>
            <div className=' basics-1/2 ml-4 text-white  mt-1'>Settings</div>
          </div>
        </div>
      </div>
      <div className=" horizontal-navbar w-11/12 h-24 shadow-2xl shadow-black-500/40 delay-[600ms] duration-[600ms]  flex flex-row" data-aos="fade-right">
    
        <h1 className=' basic-1/2 float-left  items-center mr-44 text-white text-4xl  ml-12 mt-6 delay-[100ms] duration-[600ms] ' data-aos="fade-down"><b>Dashboard/Admin</b></h1>
        <FontAwesomeIcon icon={faUser}  size="xl" className=' icon-user  basic-1/2 float-right mt-8	 ml-3   text-white   '/>
      </div>
    </div>
      </>
    )
  }
  export default Navbar
