import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faCalendarDay, faCalendarDays, faCalendarWeek } from '@fortawesome/free-solid-svg-icons';
import Sidebar2 from './Sidebar2';
import Piechart from './Piechart'; 

function Finance() {
  return (
    <>
      <div className='dashboard'>
        <Sidebar2 />
        <div className='dashboard-content'>
          <div className='dash-menu'>
            <h1 className='header--title text-4xl mb-8 text-user delay-[200ms] duration-[600ms]' data-aos="fade-up">Admin/Finance</h1>
            <div className="menu-icons flex flex-row justify-around items-center shadow-xl">
              <div className='basis-3/4 ml-42'>
                <div className='circle-menu w-12 h-12 shadow-xl flex items-center justify-center delay-[300ms] duration-[600ms]' data-aos="fade-down">
                  <span className=''> <FontAwesomeIcon icon={faCalendarDay} className='text-white' /></span>
                </div>
                <p className='text-gray-600 mt-4 delay-[200ms] duration-[600ms]' data-aos="fade-up">Daily</p>
              </div>
              <div className='basis-3/4'>
                <div className='circle-menu w-12 h-12 shadow-xl flex items-center justify-center delay-[400ms] duration-[600ms]' data-aos="fade-down">
                  <span className=''> <FontAwesomeIcon icon={faCalendarWeek} className='text-white' /></span>
                </div>
                <p className='text-gray-600 mt-4 delay-[300ms] duration-[600ms]' data-aos="fade-up">Weekly</p>
              </div>
              <div className='basis-3/4'>
                <div className='circle-menu w-12 h-12 shadow-xl flex items-center justify-center delay-[400ms] duration-[600ms]' data-aos="fade-down">
                  <span className=''> <FontAwesomeIcon icon={faCalendarDays} className='text-white' /></span>
                </div>
                <p className='text-gray-600 mt-4 delay-[300ms] duration-[600ms]' data-aos="fade-up">Monthly</p>
              </div>
              <div className='basis-3/4 ml-42'>
                <div className='circle-menu w-12 h-12 shadow-xl flex items-center justify-center delay-[200ms] duration-[600ms]' data-aos="fade-down">
                  <span className=''><FontAwesomeIcon icon={faCalendar} className='text-white' /></span>
                </div>
                <p className='text-gray-600 mt-4 delay-[200ms] duration-[600ms]' data-aos="fade-up">Annualy</p>
              </div>
            </div>
          </div>
          <Piechart /> 
        </div>
      </div>
    </>
  );
}

export default Finance;