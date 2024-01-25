import React, { useEffect } from 'react';
import '../styles/dashbaord.css';
import Logo from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUsers, faMoneyBillTransfer, faListCheck, faClipboardList, faGear ,faUser } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css';

const Sidebar2 = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className='menu md:w-52 lg:w-52 px-7'>
      <div className='logo delay-[300ms] duration-[600ms] mt-8' data-aos="fade-up">
        <img src={Logo} className=' logo-icon  shadow-2xl shadow-black-500/40' alt='Logo' />
        <h1 className='text-white font-semibold text-xl'>SheCan<span className='text-blue-700'>Code</span></h1>
  
      </div>
     
      <div className='menu--list'>
        <Link to='/Home' className='item active delay-[100ms] duration-[600ms]' data-aos="fade-down">
          <FontAwesomeIcon icon={faHome} size="" className=' icon' />
          Home
        </Link>
        <Link to='/User' className='item delay-[300ms] duration-[600ms]' data-aos="fade-down">
          <FontAwesomeIcon icon={faUsers} size="" className=' icon' />
          Users
        </Link>
        <Link to='/Finance' className='item delay-[600ms] duration-[600ms]' data-aos="fade-down">
          <FontAwesomeIcon icon={faMoneyBillTransfer} size="" className=' icon' />
          Finance
        </Link>
        <Link to='/operations' className='item delay-[900ms] duration-[600ms]' data-aos="fade-down">
          <FontAwesomeIcon icon={faListCheck} size="" className=' icon' />
          Operations
        </Link>
        <Link to='/Report' className='item delay-[400ms] duration-[600ms]' data-aos="fade-down">
          <FontAwesomeIcon icon={faClipboardList} size="" className=' icon' />
          Report
        </Link>
      </div>
      <div className='flex flex-row'>
      <FontAwesomeIcon 
        icon={faUser}
        size="lg"
        className='absolute top-4 right-4  mr-24  mt-4 basis-1'
      />
      <p className=' basis-1 absolute top-4 right-8  ml-32 mt-4 '>Admin</p>
      </div>
     
    </div>
     
  );
};

export default Sidebar2;