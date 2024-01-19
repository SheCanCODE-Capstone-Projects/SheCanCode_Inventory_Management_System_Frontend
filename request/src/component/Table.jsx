import React from 'react'
import "./Table.css"


function Table() {
  return (
    <div className='table-wrapper'>
    <div className='table'>
      <table>
        <thead>
<tr>
    <th>Date</th>
    <th>Time</th>
    <th>Item-name</th>
    <th>Quantity</th>
    <th>Unity-price</th>
    <th>Total-price</th>
    <th>Status</th>
    
    
</tr>
        </thead>
        <tbody>
<tr>
    <td>2/05/2023</td>
    <td>2:50 am</td>
    <td>Laptop</td>
    <td>1</td>
    <td>300.000 Rwf</td>
    <td>300.000 Rwf</td>
    <td><button className='button'>Delete</button>
    <button className='buttons'>Delete</button>
    </td>
   
</tr>
<tr>
    <td>2/05/2023</td>
    <td>2:50 am</td>
    <td>Laptop</td>
    <td>1</td>
    <td>300.000 Rwf</td>
    <td>300.000 Rwf</td>
    <td className='td'><button className='button'>Delete</button>
    <button className='buttons'>Delete</button>
    </td>
    
</tr>

<tr>
    <td>2/05/2023</td>
    <td>2:50 am</td>
    <td>Laptop</td>
    <td>1</td>
    <td>300.000 Rwf</td>
    <td>300.000 Rwf</td>
    <td><button className='button'>Delete</button>
    <button className='buttons'>Delete</button>
    </td>
    
    
    
</tr>

    
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default Table
