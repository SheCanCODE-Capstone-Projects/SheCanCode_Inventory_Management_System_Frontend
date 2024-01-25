import React from 'react';
function OperationsAdmin() {
  return (
    <div>
      <table className='finance-table mt-20'>
        <thead>
          <tr>
           
            <th>Item-name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total-Price</th>
            <th>Date</th>
            
          </tr>
        </thead>
        <tbody>
          <tr>
            
              <td>Fans</td>
            <td>5</td>
            <td className="border p-2 delay-[300ms] duration-[600ms]" data-aos="zoom-in-down">$300</td>
            <td className="border p-2 delay-[300ms] duration-[600ms] " data-aos="zoom-in-down">$600</td>
            <td className="border p-2 delay-[300ms] duration-[600ms] " data-aos="zoom-in-down">20/12/2023</td>
          
            </tr>
            <tr>
            
            <td>Water</td>
          <td>5</td>
          <td className="border p-2 delay-[300ms] duration-[600ms]" data-aos="zoom-in-down">$300</td>
          <td className="border p-2 delay-[300ms] duration-[600ms] " data-aos="zoom-in-down">$600</td>
          <td className="border p-2 delay-[300ms] duration-[600ms] " data-aos="zoom-in-down">20/12/2023</td>
        
          </tr>
          <tr>
            
            <td>Ph</td>
          <td>5</td>
          <td className="border p-2 delay-[300ms] duration-[600ms]" data-aos="zoom-in-down">$300</td>
          <td className="border p-2 delay-[300ms] duration-[600ms] " data-aos="zoom-in-down">$600</td>
          <td className="border p-2 delay-[300ms] duration-[600ms] " data-aos="zoom-in-down">20/12/2023</td>
        
          </tr>
        </tbody>
      </table>














      
    </div>
  );
}

export default OperationsAdmin;
