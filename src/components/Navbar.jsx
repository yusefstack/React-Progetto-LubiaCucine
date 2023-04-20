import React from 'react'
import logo from '../assets/img/lubia-logo.svg'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {

  const totalItems = useSelector(state => state.products.totalItems)

  return (
    <nav className='h-36 flex justify-between'>
      <img src={logo} alt="lubia logo" className='w-56 mt-5 ml-10'/>
      <div className='flex mt-16 text-2xl font-bold w-2/5 justify-between'>
        <Link to="/" className='text-white'>Home</Link>
        <Link to="about" className='text-white'>About</Link>
        <Link to="/products"className='text-white'>Modelli</Link>
      </div>
      <div className='flex mt-12 justify-evenly w-1/6'> 
        <Link to="/cart" className='relative'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
          </svg>
          <div className='absolute left-6 top-8 py-0.5 px-2 text-center bg-purple-300 rounded-full'><p className='text-purple-600'>{totalItems}</p></div>
        </Link>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
        </svg>
      </div>
    </nav>
  )
}

export default Navbar