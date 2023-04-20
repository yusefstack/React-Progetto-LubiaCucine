import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Carousel, Button, Breadcrumb } from 'flowbite-react'
import { addElementToCart } from '../features/storeSlices/productsSlice'

const SingleProduct = () => {
  const { productId } = useParams()
  const products = useSelector(state => state.products.products);
  const singleProduct = products.find(product => product.id === productId);
  const dispatch = useDispatch()


  function handleClick(e) {
    dispatch(addElementToCart(e.target.id))
  }


      if (singleProduct) {
        return (
          
          <div>
            <Breadcrumb
                aria-label="Solid background breadcrumb example"
                className="bg-blue-200 text-2xl py-10 px-5 dark:bg-gray-900"
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
            <div className="flex h-96 my-40">
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
              <div className='w-full pl-5'>
                <h3 className='text-gray-600'>MODELLO</h3>
                <h1 className='text-5xl text-white'>{singleProduct.model}</h1>
                <h3 className='text-gray-600 text-xl mt-2'>€{singleProduct.price}</h3>
                <h3 className='text-gray-200 py-5'>{singleProduct.desc}</h3>
                <div className='flex w-1/5 justify-between'>
                  <h3 className='text-gray-600 font-bold'>Lunghezza:</h3>
                  <h3 className='text-gray-300'>{singleProduct.info.height}</h3>
                </div>
                <div className='flex w-1/5 mb-5 justify-between'>
                  <h3 className='text-gray-600 font-bold'>Larghezza:</h3>
                  <h3 className='text-gray-300'>{singleProduct.info.width}</h3>
                </div>
                <div className='m-auto w-1/4'>
                  <Button id={singleProduct.id} onClick={handleClick} color="light">
                    Acquista
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )
      };
}

export default SingleProduct