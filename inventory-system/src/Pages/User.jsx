
import React, { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'
import Sidebar2 from '../Layouts/Sidebar2';
import '../styles/dashbaord.css'
import '../styles/index.css'
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


      <table className="w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-400">
            <th className="border p-2  delay-[100ms] duration-[600ms]" data-aos="fade-down">Name</th>
            <th className="border p-2 delay-[200ms] duration-[600ms]" data-aos="fade-down">Position</th>
            <th className="border p-2 delay-[300ms] duration-[600ms]" data-aos="fade-down">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray-100">
            <td className="border p-2 delay-[200ms] duration-[600ms] mr-32" data-aos="zoom-in-down">Joe</td>
            <td className="border p-2 delay-[300ms] duration-[600ms] mr-32" data-aos="zoom-in-down">Finance</td>
            <td className="border p-2  delay-[400ms] duration-[600ms]" data-aos="zoom-in-down">   <button className='btn-user delay-[300ms] duration-[600ms] bg-red-900 mr-24 '>Delete</button></td>
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
