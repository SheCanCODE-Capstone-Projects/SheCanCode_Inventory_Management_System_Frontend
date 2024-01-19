import React from 'react';
function OperationsAdmin() {
  return (
    <div>
       <table className="w-full border border-gray-300 mt-24 ml-32">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2  delay-[100ms] duration-[600ms]" data-aos="fade-down">Item name</th>
            <th className="border p-2 delay-[200ms] duration-[600ms]" data-aos="fade-down">Date</th>
            <th className="border p-2 delay-[300ms] duration-[600ms]" data-aos="fade-down">Quantity</th>
            <th className="border p-2 delay-[300ms] duration-[600ms]" data-aos="fade-down">Unit Price</th>
            <th className="border p-2 delay-[300ms] duration-[600ms]" data-aos="fade-down">Total price</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray-100">
            <td className="border p-2 delay-[200ms] duration-[600ms]" data-aos="zoom-in-down">Fans</td>
            <td className="border p-2 delay-[300ms] duration-[600ms]" data-aos="zoom-in-down">23/12/2021</td>
            <td className="border p-2  delay-[400ms] duration-[600ms]" data-aos="zoom-in-down">3</td>
            <td className="border p-2  delay-[400ms] duration-[600ms]" data-aos="zoom-in-down">$3000</td>
            <td className="border p-2  delay-[400ms] duration-[600ms]" data-aos="zoom-in-down">$6000</td>
          </tr>
        
        </tbody>
      </table>
    </div>
  );
}

export default OperationsAdmin;
