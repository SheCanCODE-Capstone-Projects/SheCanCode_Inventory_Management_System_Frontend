
import React from 'react';
import Sidebar2 from '../Layouts/Sidebar2';
import OperationsAdmin from './OperationsAdmin';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
function Operations() {
  return (
    <div className='dashboard'>
        <Sidebar2 />

        <div className='dashboard-content'>
 
        <div className=" p-4">
        <h1 className='header--title text-4xl mb-8 text-user delay-[200ms] duration-[600ms]' >Admin/Operations</h1>
      <div className="flex items-center " data-aos="fade-up">
        <input
          type="text"
          className="py-2 px-40 rounded-l-full bg-gray-300 text-gray-700 placeholder-gray-500 mt-16 ml-32 "
          placeholder="Search..." data-aos="fade-down"
        />
        <button className="bg-gray-300 text-white py-2 px-8 rounded-r-full mt-16 ">
          <FontAwesomeIcon icon={faSearch} size="lg" className="icon" />
        </button>
      </div>
      <OperationsAdmin/>
    </div>

  </div>
  </div>
  );
}

export default Operations;
