import React from 'react';
import Request from './component/Request';
import { MdAdd } from "react-icons/md";
import Table from './component/Table';
import '../src/component/Request.css'
import './App.css'

function App() {
return (
    <>
      <Request />
      
    <div className='name'>
     <h1>Item-in</h1>
     <hr />
      </div>
      <button className='betta'>
      <MdAdd className='bettas'/>
        <h2>Add item</h2>
      </button>
      <Table />
    </>
  )
}

export default App
