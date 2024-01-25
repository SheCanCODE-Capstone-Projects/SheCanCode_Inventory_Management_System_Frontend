import React, { useEffect } from 'react'
import '../styles/dashbaord.css'
import 'aos/dist/aos.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const courses =[
    {
    icon:<FontAwesomeIcon icon={faUser}/>,
    title:'Divine',
    duration:'Finance',
    },
    {
    icon:<FontAwesomeIcon icon={faUser}/>,
    title:'Provi',
    duration:'Finance',
    },
    {
    icon:<FontAwesomeIcon icon={faUser}/>,
    title:'Yvette',
    duration:'Finance',
    },
    {
    icon:<FontAwesomeIcon icon={faUser}/>,
    title:'Ange',
    duration:'Finance',
    },
    {
    icon:<FontAwesomeIcon icon={faUser}/>,
    title:'',
    duration:'',
    },
   
]
const  Usersnav =() =>{
  return (
    <div className='profile shadow-md'>
      <div className='hello'>
        <div className='user-detail delay-[300ms] duration-[600ms]' data-aos="fade-up">
            <h3 className='username'>Available Users</h3>
            <span className="proffesion"></span>
        </div>
        <div className='user-courses delay-[500ms] duration-[600ms]' data-aos="fade-down">
        {courses.map((coures)=>(
            <div className='course'>
            <div className='course-detail'>
            <div className='course-cover'>{coures.icon}</div>
                <div className='course-name'>
                <h5 className='title'>{coures.title}</h5>
                <span className='duration'>{coures.duration}</span>
            </div>
        </div>
    </div>
       
  ))}
     
    </div>
    </div>
    </div>
  );
}

export default Usersnav;
