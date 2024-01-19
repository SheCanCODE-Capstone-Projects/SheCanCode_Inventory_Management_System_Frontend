import React from 'react'
import {BiHome,BiSolidReport, BiStats} from 'react-icons/bi';
import { HiUsers } from "react-icons/hi2";
import { FaUser } from "react-icons/fa";
import { TbReport } from "react-icons/tb";
import { IoIosSettings } from "react-icons/io";
import de from '../assets/de.png'


const Request = () => {
  return (
    <>
<div className='we'> 
    <FaUser className='icone'/>
<div className='menu'>  
        <div className='logo'>
        <img src={de} alt='' />
        </div><br/>
      <div className='menu-list'>
        <a href='#' className='item'>
            <BiHome className='icon'/>
            Home
        </a>

        <a href='#' className='item'>
            <HiUsers className='icon'/>
            Users
        </a>

        <a href='#' className='item'>
            <BiSolidReport className='icon'/>
            Finance
        </a>

        <a href='#' className='item'>
            <BiStats className='icon'/>
            Operation
        </a>

        <a href='#' className='item'>
            <TbReport className='icon'/>
            Peport
        </a>

        <a href='#' className='item'>
            <IoIosSettings className='icon'/>
            Settings
        </a>
      </div>
      </div>
    </div>
    </>
  )
}

export default Request
