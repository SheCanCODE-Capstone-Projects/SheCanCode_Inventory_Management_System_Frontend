
import React, { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'
import Sidebar2 from './Sidebar2';
import './dashbaord.css'
import '../index.css'
function User() {
    
    const data = [
        useEffect(()=>{
            AOS.init({duration:2000})
        },
        []),
       
    ];
    
  return (
    <>
     <div className='dashboard'>
      <Sidebar2/>
      <div className='dashboard-content'>
      <div className='users'>
    <div className='users-main'>
        <h1 className=' header--title text-4xl mb-8 text-user delay-[200ms] duration-[600ms] ' data-aos="fade-up">Admin/Users</h1>
       
        <button className='btn-user mt-12 delay-[300ms] duration-[600ms] ' data-aos="fade-down"><b>+</b>Add New User</button>


      
    </div>
    <div className='user-table'>
    <table className="shadow-lg bg-white border-separate w-full delay-[200ms] duration-[600ms]" data-aos="fade-up">
  <thead>
    <tr>
      <th className="border px-4 py-4 border-b-0">Name</th>
      <th className="border px-4 py-4 border-b-0">Position</th>
      <th className="border px-4 py-4 border-b-0">Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border px-4 py-4 border-b-0">Lorem Ipsum</td>
      <td className="border px-4 py-4 border-b-0">Operating Manager</td>
      <td className="border px-4 py-4 border-b-0">
        <button className='btn-user delay-[300ms] duration-[600ms] bg-red-900'>Delete</button>
      </td>
    </tr>
  </tbody>
</table>
    </div>
    
</div>
      </div>
   
    </div>

</>
  );
  
}

export default User;
