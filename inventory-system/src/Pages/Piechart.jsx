import React from 'react';
import AOS from 'aos'


import 'aos/dist/aos.css'
const MyTable = () => {
  return (
    <div className="w-full bg-gray-200 p-8 mt-8">
      <table className="w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-400">
            <th className="border p-2  delay-[100ms] duration-[600ms]" data-aos="fade-down">Money On the account</th>
            <th className="border p-2 delay-[200ms] duration-[600ms]" data-aos="fade-down">Money Used</th>
            <th className="border p-2 delay-[300ms] duration-[600ms]" data-aos="fade-down">Money Remaining</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray-100">
            <td className="border p-2 delay-[200ms] duration-[600ms]" data-aos="zoom-in-down">$6000</td>
            <td className="border p-2 delay-[300ms] duration-[600ms]" data-aos="zoom-in-down">$1000</td>
            <td className="border p-2  delay-[400ms] duration-[600ms]" data-aos="zoom-in-down">$5000</td>
          </tr>
        
        </tbody>
      </table>
    </div>
  );
};

export default MyTable;