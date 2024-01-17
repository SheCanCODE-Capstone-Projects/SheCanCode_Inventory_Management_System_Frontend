import React from 'react';
import Contents from './Contents';
import Cards from './Cards';
import History from './History';
import './dashbaord.css'


function Content() {
  return (
    <div className='content'>
    <Contents/>
    <Cards/>
    <History/>
    </div>
  );
}

export default Content;
