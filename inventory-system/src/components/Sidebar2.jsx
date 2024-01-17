
import React, { useEffect } from 'react'
import './dashbaord.css'
import Logo from '../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import {faMoneyBillTransfer } from '@fortawesome/free-solid-svg-icons'
import {faListCheck } from '@fortawesome/free-solid-svg-icons'
import {faClipboardList} from '@fortawesome/free-solid-svg-icons'
import {faGear} from '@fortawesome/free-solid-svg-icons'
import AOS from 'aos'
import {Link} from 'react-router-dom'
import 'aos/dist/aos.css'

const Sidebar2 =() =>{
    useEffect(()=>{
        AOS.init({duration:2000})
    },
    [])
  return (
    <div className='menu'>
        <div className='logo delay-[300ms] duration-[600ms]' data-aos="fade-up" >
        <img src={Logo} className=' logo-icon  shadow-2xl shadow-black-500/40 ' />
    </div>
    <div className='menu--list'>
    <Link to='/Home'><a href='#' className='item active delay-[100ms] duration-[600ms]' data-aos="fade-down" >
            <FontAwesomeIcon icon={faHome}  size="" className=' icon'/>
            Dashboard
        </a></Link>
        <Link to='/User'><a href='#' className='item   delay-[300ms] duration-[600ms]' data-aos="fade-down">
            <FontAwesomeIcon icon={faUsers}  size="" className=' icon'/>
            Users
        </a></Link>
        <Link to='/Finance'><a href='#' className='item   delay-[600ms] duration-[600ms]' data-aos="fade-down">
            <FontAwesomeIcon icon={faMoneyBillTransfer}  size="" className=' icon'/>
            Finance
        </a></Link>
        <a href='#' className='item   delay-[900ms] duration-[600ms]' data-aos="fade-down">
            <FontAwesomeIcon icon={faListCheck}  size="" className=' icon'/>
            Operations
        </a>
        <a href='#' className='item  delay-[400ms] duration-[600ms] 'data-aos="fade-down">
            <FontAwesomeIcon icon={faClipboardList}  size="" className=' icon'/>
            Report
        </a>
        <a href='#' className='item  delay-[500ms] duration-[600ms] ' data-aos="fade-down">
            <FontAwesomeIcon icon={faGear}  size="" className=' icon'/>
            Settings
        </a>
    </div>  
</div>
  );
}

export default Sidebar2;
