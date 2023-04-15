import React from 'react'
import { Breadcrumb } from 'flowbite-react'

const ProductsPath = (props) => {
  return (
    <Breadcrumb
            aria-label="Solid background breadcrumb example"
            className="bg-violet-600 text-2xl py-10 px-5 dark:bg-gray-900"
        >
            <h3>Home</h3>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 mx-2 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
            </svg>
            <h3>{props.path}</h3>
    </Breadcrumb>
  )
}

export default ProductsPath