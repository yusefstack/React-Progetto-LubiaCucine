import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Carousel, Button, Breadcrumb } from 'flowbite-react'

const SingleProduct = () => {
  const { productId } = useParams()
  
    const products = useSelector(state => state.products.products)
    const singleProduct = products.find(product => product.id === productId)
      if (singleProduct) {
        return (
          
          <div>
            <Breadcrumb
                aria-label="Solid background breadcrumb example"
                className="bg-violet-600 text-2xl py-10 px-5 dark:bg-gray-900"
            >
                <h3>Home</h3>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 mx-2 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                </svg>
                <h3>Modelli</h3>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 mx-2 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                </svg>
                <h3>{singleProduct.model}</h3>
            </Breadcrumb>
            <div className="flex h-56 sm:h-64 xl:h-80 2xl:h-96 mt-10 mb-10 ml-10">
              <Carousel>
                <img
                  src={singleProduct.img}
                  alt="immagine-modello-cucina"
                />
                <img
                  src="https://images2.imgbox.com/da/bb/iXlbK9A6_o.jpeg"
                  alt="immagine-lavorazione"
                />
                <img
                  src="https://images2.imgbox.com/6d/47/A11k7xmf_o.jpeg"
                  alt="immagine-lavorazione"
                />
                <img
                  src="https://images2.imgbox.com/ca/f3/rPR1K8nP_o.jpeg"
                  alt="immagine-lavorazione"
                />
                <img
                  src="https://images2.imgbox.com/1b/ea/t89LageS_o.jpeg"
                  alt="immagine-lavorazione"
                />
              </Carousel>
              <div className='w-full p-10'>
                <h3 className='text-gray-600'>MODEL</h3>
                <h1 className='text-5xl text-white'>{singleProduct.model}</h1>
                <h3 className='text-gray-600'>€{singleProduct.price}</h3>
                <h3 className='text-gray-600'>{singleProduct.desc}</h3>
                <div className='flex w-1/5 justify-between'>
                  <h3 className='text-gray-600 font-bold'>Lunghezza:</h3>
                  <h3 className='text-gray-300'>{singleProduct.info.height}</h3>
                </div>
                <div className='flex w-1/5 justify-between'>
                  <h3 className='text-gray-600 font-bold'>Larghezza:</h3>
                  <h3 className='text-gray-300'>{singleProduct.info.width}</h3>
                </div>
                <Button color="light">
                  Acquista
                </Button>
              </div>
            </div>
          </div>
        )
      };
}

export default SingleProduct