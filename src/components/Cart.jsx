import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteElementInCart } from '../features/storeSlices/productsSlice';
import { v4 as uuid4 } from 'uuid';

const Cart = () => {
    
    const dispatch = useDispatch()

    function handleClick(e) {
        dispatch(deleteElementInCart(e.target.id))
    }

    const cartProducts = useSelector(state => state.products.cart)
    const cartProductsToDisplay = cartProducts.map(product => {
    return (
            <div key={uuid4()} className='relative'>
                <div className='w-5/6 relative p-5 mb-10 rounded-lg bg-white flex max-lg:w-full'>
                    <img src={product.img} alt="product-image" className="w-1/2 rounded-lg" />
                    <div className="ml-5">
                        <h2 className="text-xl mb-5 font-bold text-gray-900">{product.model}</h2>
                        <p className="text-xl">€{product.price}</p>
                    </div>
                </div>
                <svg id={product.id} onClick={handleClick} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 text-blue-700 absolute right-[20%] bottom-[80%] w-5 cursor-pointer duration-150 hover:text-red-500 max-lg:ml-[15%] max-lg:right-[4%]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </div>
            )
    })
    const totalPrice = useSelector(state => state.products.totalPrice)


    return (
        <div className=''>
            <div className='mt-28 mb-40'>
                <h1 className="mb-10 text-center text-white text-2xl font-bold">CARRELLO</h1>
                <div>
                    <div className="flex m-auto w-5/6 max-lg:block">
                        <div  className='w-2/3 max-lg:w-full'>
                            {cartProducts.length > 0 ? cartProductsToDisplay : <div className='text-white w-3/4 h-full text-center rounded-lg p-20 text-xl max-lg:w-full'>Nessun elemento nel carrello. </div>}
                        </div>
                        <div className="h-full rounded-lg border bg-white p-5 shadow-md mt-0 w-1/3 max-lg:w-full">
                            <div className="flex justify-between">
                                <p className="text-gray-700">SPEDIZIONE E MONTAGGIO</p>
                                <p className="text-blue-700">SEMPRE GRATUTITI</p>
                            </div>
                            <hr className="my-4" />
                            <div className="flex justify-between">
                                <p className="text-lg font-bold">Totale</p>
                                <div className="">
                                    <p className="mb-1 text-lg font-bold">€{totalPrice}</p>
                                    <p className="text-sm text-gray-700">IVA inclusa</p>
                                </div>
                            </div>
                            <button className="mt-6 w-full rounded-md bg-blue-700 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Check out</button>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Cart