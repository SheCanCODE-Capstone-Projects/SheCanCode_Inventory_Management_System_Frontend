
import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import {faListCheck } from '@fortawesome/free-solid-svg-icons'
import {faClipboardList} from '@fortawesome/free-solid-svg-icons'
import { PieChart, Pie, Tooltip } from "recharts";

import AOS from 'aos'
import 'aos/dist/aos.css'
const Dash2 = () => {
    const data = [
       
       
        { name: "0", students: 600 },
       
        useEffect(()=>{
            AOS.init({duration:2000})
        },
        []),
       
    ];
  return (
    <>
      <div>
      <div className=' dash-menu-2 flex flex-row  items-center justify-center shadow-xl bg-white'>
              <div className='mr-24'>
                  <div className='menu'>
                      <div className='circle-menu w-12 h-12 shadow-xl bg-white  flex items-center justify-center delay-[200ms] duration-[600ms] '  data-aos="fade-down">
                          <span className=''><FontAwesomeIcon icon={faUsers} className='text-white ;'/></span>
                      </div>
                      <p className='text-gray-600 mt-4 delay-[100ms] duration-[600ms] ' data-aos="fade-up"></p>Users
                  </div>
              </div>



              <div className='mr-24'>
                  <div className='menu'>
                      <div className='circle-menu w-12 h-12 shadow-xl bg-white  flex items-center justify-center delay-[300ms] duration-[600ms] '  data-aos="fade-down">
                          <span className=''> <FontAwesomeIcon  icon={faListCheck} className='text-white' /></span>
                      </div>
                      <p className='text-gray-600 mt-4 delay-[200ms] duration-[600ms] ' data-aos="fade-up">Status</p>
                  </div>
              </div>

              <div className='mr-24'>
                  <div className='menu'>
                      <div className='circle-menu w-12 h-12 shadow-xl bg-white  flex items-center justify-center delay-[400ms] duration-[600ms]' data-aos="fade-down">
                          <span className=''> <FontAwesomeIcon icon={faClipboardList} className='text-white' /></span>
                      </div>
                      <p className='text-gray-600 mt-4  delay-[300ms] duration-[600ms] ' data-aos="fade-up">Report</p>
                  </div>
              </div>

           
          </div>
    

          <div
      style={{
                textAlign: "center",
                margin: "auto 0%",
                display:"flex",
                padding:"0px 100px",
                marginLeft:"300px"
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
      </div>

      
    </>
  );
}

export default Dash2;
