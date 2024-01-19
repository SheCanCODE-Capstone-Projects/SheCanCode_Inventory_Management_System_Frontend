import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import  vector from '../assets/login.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'
const Login = () =>{
    useEffect(()=>{
        AOS.init({duration:2000})
    },
    [])
  
    return (
      <>
      <div className='main-div main-container w-full h-screen flex flex-col md:flex-row items-center justify-center'>
  <div className='vector basics-1/2 bg-white md:w-4/12 sm-4/12 min-h-40  shadow-lg shadow-black-500 hidden md:block'>
    <img src={vector} className='basics-1/2 size-min  md:mt-24 mx-auto md:ml-0 md:mr-auto ' alt='home vector' data-aos="fade-right" />
  </div>
  <div className='login-form  basics-1/2 w-full md:w-5/12 min-h-40 bg-gradient-to-r from-blue-900 to-blue-999 p-8 md:p-12 shadow-lg'>
    <h1 className='text-white mt-14 font-bold text-3xl md:text-4xl mb-4 md:mb-8 delay-[400ms] duration-[600ms]' data-aos="fade-down">
      Login Form
    </h1>
    <form className='form mx-4 md:mx-0'>
      <input
        className="input-field mb-6 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300"
        id="username"
        type="text"
        placeholder="Username"
        data-aos="fade-down"
      />
      <input
        className="input-field mb-6 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300"
        id="password"
        type="password"
        placeholder="Password"
        data-aos="fade-down"
      />
      <Link to='/Home'>
        <button className='home-button mb-6 bg-white text-blue-800 rounded-full px-8 py-3 font-bold hover:bg-blue-700 hover:text-white transition duration-300' data-aos="fade-down">
          Login
        </button>
      </Link>
      <p className='text-white mb-6'>
        Not Registered Yet? <Link to="/register" className='text-blue-300 hover:underline'>Create a new account</Link>
      </p>
    </form>
  </div>
</div>
      </>
    )
  }
  export default Login
