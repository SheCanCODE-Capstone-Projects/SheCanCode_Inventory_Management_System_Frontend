
import React, { useEffect } from 'react'
import { PieChart, Pie } from "recharts";
import AOS from 'aos'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import {faListCheck } from '@fortawesome/free-solid-svg-icons'
import {faClipboardList} from '@fortawesome/free-solid-svg-icons'
import Navbar from './Navbar';
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import { faCalendarWeek } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

import 'aos/dist/aos.css'
function Home() {
    const data = [
       
       
        { name: "0", students: 600 },
       
        useEffect(()=>{
            AOS.init({duration:2000})
        },
        []),
       
    ];
  return (
    <>
    <Navbar/>
    <div className='dash-menu '>
    <div className=' dash-menu-2 flex flex-row  items-center justify-center shadow-xl bg-white'>
              <div className='mr-24'>
                  <div className='menu'>
                      <div className='circle-menu w-9 h-9 shadow-xl bg-white  flex items-center justify-center delay-[200ms] duration-[600ms] '  data-aos="fade-down">
                          <span className=''><FontAwesomeIcon icon={faUsers} className='text-white ;'/></span>
                      </div>
                      <p className='text-gray-600 mt-2 delay-[100ms] duration-[600ms] ' data-aos="fade-up">Users</p>
                  </div>
              </div>



              <div className='mr-24'>
                  <div className='menu'>
                      <div className='circle-menu w-9 h-9 shadow-xl bg-white  flex items-center justify-center delay-[300ms] duration-[600ms] '  data-aos="fade-down">
                          <span className=''> <FontAwesomeIcon  icon={faListCheck} className='text-white' /></span>
                      </div>
                      <p className='text-gray-600 mt-2 delay-[200ms] duration-[600ms] ' data-aos="fade-up">Status</p>
                  </div>
              </div>

              <div className='mr-24'>
                  <div className='menu'>
                      <div className='circle-menu w-9 h-9 shadow-xl bg-white  flex items-center justify-center delay-[400ms] duration-[600ms]' data-aos="fade-down">
                          <span className=''> <FontAwesomeIcon icon={faClipboardList} className='text-white' /></span>
                      </div>
                      <p className='text-gray-600 mt-2  delay-[300ms] duration-[600ms] ' data-aos="fade-up">Report</p>
                  </div>
              </div>

           
          </div>
    </div>

          <div
      style={{
                textAlign: "center",
                margin: " auto 3%",
                display:"flex",

                padding:"0px 100px",
                marginLeft:"400px",
                marginTop:"-8%"
            }}
        >
     
      <PieChart width={200} height={400} style={{ flex:"1", marginRight:"100px"}} className='pie'>
      
               
                <Pie className='pie'
                    data={data}
                    dataKey="students"
                    outerRadius={100}
                    innerRadius={70}
                    fill="#172554"
                    label={({ name }) => (
                        <g>                        
                            <text x="50%" y="50%" textAnchor="middle" dy={3} fill="grey" style={{ fontSize: '200%' }}>
                            300
                         
                        </text>
                          <text x="50%" y="50%" textAnchor="middle" dy={30} fill="#172554"  style={{ fontWeight: 'bold' }}>
                          Items
                      </text>
                         </g>
                    )}
                    labelLine={false}
                />
               
            </PieChart>





            <PieChart width={200} height={400} style={{ flex:"1",marginRight:"100px"}}>
      
               
                <Pie className='pie'
                    data={data}
                    dataKey="students"
                    outerRadius={100}
                    innerRadius={70}
                    fill="#172554"
                    label={({ name }) => (
                        <g>                        
                            <text x="50%" y="50%" textAnchor="middle" dy={3} fill="grey" style={{ fontSize: '200%' }}>
                            50
                         
                        </text>
                          <text x="50%" y="50%" textAnchor="middle" dy={30} fill="#172554"  style={{ fontWeight: 'bold' }}>
                          Items-In
                      </text>
                         </g>
                    )}
                    labelLine={false}
                />
               
            </PieChart>
            <PieChart width={200} height={400} style={{ flex:"1",marginRight:"100px"}}>
      
               
                <Pie className='pie'
                    data={data}
                    dataKey="students"
                    outerRadius={100}
                    innerRadius={70}
                    fill="#172554"
                    label={({ name }) => (
                        <g>                        
                            <text x="50%" y="50%" textAnchor="middle" dy={3} fill="grey" style={{ fontSize: '200%' }}>
                           10
                         
                        </text>
                          <text x="50%" y="50%" textAnchor="middle" dy={30} fill="#172554"  style={{ fontWeight: 'bold' }}>
                          Items-Out
                      </text>
                         </g>
                    )}
                    labelLine={false}
                />
               
            </PieChart>
      </div>
      <div className=" horizontal-navbar-2 w-9/12 h-24 shadow-2xl shadow-black-500/40 delay-[600ms] duration-[600ms]  flex flex-row" data-aos="fade-right">
    
    <h1 className=' basic-1/2 float-left  items-center mr-44 text-white text-4xl  ml-12 mt-6 delay-[100ms] duration-[600ms] ' data-aos="fade-down"><b>Dashboard/Admin</b></h1>
    

<p className='text-blue-800 font-bold'>
 Purchased
</p>
              
                <div className='circle-menu-1 w-9 h-9 shadow-xl bg-white  flex items-center justify-center delay-[400ms] duration-[600ms]' data-aos="fade-down">
                          <span className=''> <FontAwesomeIcon icon={faCalendarDay} className='text-white' /></span>
                      </div>
                      
                <div className='circle-menu-1 w-9 h-9 shadow-xl bg-white  flex items-center justify-center delay-[400ms] duration-[600ms]' data-aos="fade-down">
                          <span className=''> <FontAwesomeIcon icon={faCalendarDays} className='text-white' /></span>
                      </div>
                      <div className='circle-menu-1 w-9 h-9 shadow-xl bg-white  flex items-center justify-center delay-[400ms] duration-[600ms]' data-aos="fade-down">
                          <span className=''> <FontAwesomeIcon icon={faCalendarWeek} className='text-white' /></span>
                      </div>
                      <div className='circle-menu-1 w-9 h-9 shadow-xl bg-white  flex items-center justify-center delay-[400ms] duration-[600ms]' data-aos="fade-down">
                          <span className=''> <FontAwesomeIcon icon={faCalendar} className='text-white' /></span>
                      </div>
                </div>
    </>
  );
}

export default Home;
