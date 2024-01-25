import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Sidebar2 from '../Layouts/Sidebar2';
import Piechart from './Piechart';
import Contents from './Contents'; 

function Finance() {
  return (
    <>
      <div className='dashboard'>
        <Sidebar2 />
        <div className='dashboard-content '>
          <div className='dash-menu  '>
          <Contents/>
           <div className='flex justify-center'>      
           <Piechart/>
           </div>
       
         
            <button className='btn-user bg-blue-900 mt-24 text-white px-8 py-3 rounded-full hover:bg-gray-500 text-sm focus:outline-none focus:border-red-700 mr-20'  data-aos="fade-up">
            View more ..
          </button>
            </div>
        </div>
      </div>
    </>
  );
}

export default Finance;