import React from 'react'
import { Link } from 'react-router-dom';

const ProductList = ({img, model, id}) => {
return (
        <div className="h-126 w-4/5 rounded-xl m-10 shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden">
            <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={img} alt="blog" />
            <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">MODELLO</h2>
                <h1 className="title-font text-2xl font-medium text-gray-600 mb-3">{model}</h1>
                <Link to={`/products/${id}`} className="flex items-center flex-wrap ">
                <button className="m-auto bg-gradient-to-r from-cyan-400 to-blue-400 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg">Più info</button>
                </Link>
            </div>
    </div>
    )
}

export default ProductList