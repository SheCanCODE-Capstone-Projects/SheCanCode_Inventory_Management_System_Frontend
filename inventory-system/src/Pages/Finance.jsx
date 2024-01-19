import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Sidebar2 from '../Layouts/Sidebar2';
import Piechart from './Piechart'; 

function Finance() {
  return (
    <>
      <div className='dashboard'>
        <Sidebar2 />
        <div className='dashboard-content '>
          <div className='dash-menu '>
            <h1 className='header--title text-4xl mb-12  mt-12 text-user delay-[200ms] duration-[600ms]' data-aos="fade-up">Admin/Finance</h1>
            <div className="menu-icons flex flex-row justify-around items-center shadow-xl">
                <Piechart/>
            </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default Finance;