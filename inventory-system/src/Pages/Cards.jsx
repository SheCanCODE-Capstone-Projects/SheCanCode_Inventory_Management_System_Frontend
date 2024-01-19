import React, { useEffect } from 'react'
import '../styles/dashbaord.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faCartArrowDown, faCartShopping } from '@fortawesome/free-solid-svg-icons'

   const course =[
    {
    title:'Items-In',
    icon:<FontAwesomeIcon icon={faCartArrowDown} size='sm' />
    
    },
    {
        title:'Items-Out',
        icon:<FontAwesomeIcon icon={faCartShopping} size='sm' />
        
        },
        {
            title:'All-items',
            icon:<FontAwesomeIcon icon={faCartShopping} size='sm' />
            
            },   

   ];
   const Cards = () =>{
    return (
    <div className='card-container  grid grid-cols-3 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-12 delay-[500ms] duration-[600ms]'  data-aos="fade-up" >
        {course.map((item)=>(
            <div className='card shadow-md'  >
                <div className='card--cover'>{item.icon}</div>
                <div className='card--title'>
                    <h2>{item.title}</h2>
                </div>
                </div>
        ))}
    </div>
    );
        };


export default Cards;
