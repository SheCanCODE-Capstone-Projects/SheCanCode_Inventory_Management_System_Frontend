import React from 'react';
import '../styles/dashbaord.css'
import Sidebar2 from '../Layouts/Sidebar2';
import Usersnav from './Usersnav';
import Content from './Content'
function Dashboard() {
  return (
    <div className='dashboard'>
        <Sidebar2 />
        <div className='dashboard-content'>
        <Content/>
        <Usersnav/>
      </div>
   
    </div>
  );
}

export default Dashboard;
