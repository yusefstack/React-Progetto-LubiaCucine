import React from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

const Products = () => {
  const products = useSelector(state => state.products.products)
  const productsToDisplay = products.map(product => {
    return (
      <div key={uuidv4()} className="h-5/6 w-4/5 rounded-xl m-10 shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden">
        <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={product.img} alt="blog" />
        <div className="p-6">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">MODELLO</h2>
          <h1 className="title-font text-2xl font-medium text-gray-600 mb-3">{product.model}</h1>
          <div className="flex items-center flex-wrap ">
            <button className="m-auto bg-gradient-to-r from-cyan-400 to-blue-400 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg">Più info</button>
          </div>
        </div>
      </div>
    )
  })

  return (
    <div>
        <div className="flex-1 flex justify-center m-auto px-2 lg:ml-6">
          <div className="max-w-2xl w-full">
            <label htmlFor="search" className="sr-only">Search </label>
            <form className="relative z-50">
              <button type="submit" id="searchsubmit" className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
                </svg>
              </button>
              <input type="text" name="s" id="s" className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-gray-700 text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-white focus:text-gray-900 sm:text-sm transition duration-150 ease-in-out" placeholder="Search"/>
            </form>
          </div>
        </div>

        <div className='grid grid-cols-3'>
          {productsToDisplay}
        </div>
    </div>
  )
}

export default Products