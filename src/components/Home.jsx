import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid';

const Home = () => {
  const products = useSelector(state => state.products.products)
  const productsToDisplay = products.filter(product => product.price > 20.000)

  
  return (
    <div className='h-2/5 overflow-hidden mt-20 relative'>
            <img className="w-2/3 absolute  shadow-xl shadow-black dark:shadow-black/50" src="https://www.cucinelube.it/public/images/23131_cucina-lube-unica.jpg" alt="cucina-tipo" />
            <img className="w-2/3 absolute left-2/4 bottom-2/4 shadow-xl shadow-black dark:shadow-black/50" src="https://www.cucinelube.it/public/images/21107_cucine-lube-immagina-wood-6-1.jpg" alt="cucina-tipo" />
        <div className='p-60'/>
        <div className='p-52'/>
        <div className='mt-60 mb-32'>
          <h1 className='text-8xl text-gray-800 text-opacity-90'>2023</h1>
          <h1 className='text-8xl font-bold text-opacity-60 text-white'>NUOVA COLLEZIONE</h1>
          <div className='w-2/6 flex justify-between'>
            <h1 className='text-3xl text-gray-800 text-opacity-90'>april edition</h1>
            <h1 className='text-3xl text-gray-800 text-opacity-90'>04 04</h1>
          </div>
        </div>
        <div className='mt-50 mb-32'>
          <h1 className='text-4xl text-white text-center'>ALCUNI DEI NOSTRI MODELLI</h1>
          <div className='flex justify-around'>
            {productsToDisplay.map(product => {
              return (
                <div key={uuidv4()} className='w-1/4 m-10'>
                  <img src={product.img} alt="prodotto-consigliato" className='w-full h-127'/>
                  <h1 className=' text-gray-500 text-opacity-90'>{product.model}</h1>
                </div>
              )
            })}
          </div>
          <div className='w-128 m-auto'>
            <Link to="/products" className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group">
              <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-blue-600 via-cyan-400 to-pink-300 group-hover:opacity-100"></span>
              <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
              <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
              <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
              <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
              <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
              <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
              <span className="relative">TUTTI I MODELLI</span>
            </Link>
          </div>
        </div>
    </div>

  )
}

export default Home