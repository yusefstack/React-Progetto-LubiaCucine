import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { Breadcrumb } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ProductList from './ProductList';
import Searchbar from './Searchbar';
import ProductsPath from './ProductsPath';

const Products = () => {
  const [searchWord, setSearchWord] = useState('');
  const [productsToDisplay, setProductsToDisplay] = useState('');
  const [ProductsFound, setProductsFound] = useState(true);

  function handleChange(e) {
    setSearchWord(e.target.value)
  };
  function handleSubmit(e) {
    e.preventDefault()
  };

  const productNotFound = <div className='text-2xl w-full my-52 text-center text-white'>Siamo spiacenti, il modello da voi ricercato non è disponibile.</div>;

  const products = useSelector(state => state.products.products);

  useEffect(() => {
    if(searchWord !== '') {
      const firstLetterCapitalized = searchWord[0].toUpperCase()
      const restOfWord = searchWord.slice(1).toLowerCase()
      const filteredProducts = products.filter(product => product.model.includes( firstLetterCapitalized + restOfWord))
      if(filteredProducts.length > 0) {
        setProductsFound(true)
        setProductsToDisplay(filteredProducts.map(product => {
          return (
            <ProductList key={uuidv4()} {...product}/>
          )
        }))
      } else {
        setProductsFound(false)
        setProductsToDisplay(productNotFound)
      }
      
    } else {
      setProductsFound(true)
      setProductsToDisplay(products.map(product => {
        return (
            <ProductList key={uuidv4()} {...product}/>
        )
      }))
    }
  }, [products, searchWord])

  

  return (
    <div>
        <ProductsPath path={"Modelli"} />
        <Searchbar handleSubmit={handleSubmit} handleChange={handleChange} value={searchWord} />
        <div className={ProductsFound ? "grid grid-cols-3" : undefined}>
            {productsToDisplay}
        </div>
    </div>
  )
}

export default Products