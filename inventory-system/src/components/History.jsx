
import React, { useEffect } from 'react'
import './dashbaord.css'
import 'aos/dist/aos.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
const teacher =[
    {
    image:<FontAwesomeIcon icon={faCartArrowDown} />,
    name:'Fans',
    Quantity:'2',
    cost:'$250',
    date:'4/5/2023',
    },
    {
    image:<FontAwesomeIcon icon={faCartArrowDown} />,
    name:'water',
    Quantity:'4',
    cost:'$20',
    date:'4/1/2024',
    },
];
const History =() =>{
    return (
    <div className='teacher-list'>
        <div className='list-header'>
            <h2  className='header--title delay-[300ms] duration-[600ms]'  data-aos="fade-Up">Transactions</h2>
        </div>
        <div className='list-container delay-[700ms] duration-[600ms]' data-aos="fade-down">
            {teacher.map((teacher)=> (
            <div className='list'>
                <div className='teacher-detail'>
                    <span  className='ml-5'>{teacher.image}</span>
                    <h2>{teacher.name}</h2>
                 </div>
                <span>{teacher.date}</span>
                <span>{teacher.Quantity}</span>
                <span   className='mr-5'>{teacher.cost}</span>
            </div>
        ))}
    </div>
    </div>);
};

export default History;
