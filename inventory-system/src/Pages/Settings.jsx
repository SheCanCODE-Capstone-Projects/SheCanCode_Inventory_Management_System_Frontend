
import React, { useState } from 'react';
import Sidebar2 from '../Layouts/Sidebar2';
import '../styles/Settings.css'
const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };
  const circleStyle = {
    transform: darkMode ? 'translateX(160px)' : 'translateX(0)',
  };
  return (


   
    <div className=' dashboard'>
      <Sidebar2/>

  <div className={`dashboard-content px-28  ${darkMode ? 'dark-mode' : 'light-mode'}`}>
  <div className=" mt-5 ">
        <h1 className='header--title text-4xl mb-20 text-user delay-[200ms] duration-[600ms]'  data-aos="fade-down">Admin/Settings</h1>
        <span className='header--title text-2xl  text-user delay-[400ms] duration-[600ms]' data-aos="zoom-in-up">Dark/Light Mode</span>
    <div>
      <div id="toggle" onClick={toggleMode} className='mt-12 mb-12 delay-300ms] duration-[600ms]' data-aos="fade-down">
        <i className="indicator"  style={circleStyle}></i>
      </div>
      </div>
      <span className='header--title text-2xl  mt-24 text-user delay-[300ms] duration-[600ms]' data-aos="zoom-in-up">Font-Size</span>
  </div>
    </div>
    </div>
  );
};

export default Settings;
