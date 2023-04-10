import React from 'react'

const Home = () => {
  return (
    <div className='h-2/5 overflow-hidden mt-20 relative'>
            <img className="w-2/3 absolute  shadow-xl shadow-black dark:shadow-black/50" src="https://www.cucinelube.it/public/images/23131_cucina-lube-unica.jpg" alt="cucina-tipo" />
            <img className="w-2/3 absolute left-2/4 top-1/4 shadow-xl shadow-black dark:shadow-black/50" src="https://www.cucinelube.it/public/images/21107_cucine-lube-immagina-wood-6-1.jpg" alt="cucina-tipo" />
        <div className='p-60'/>
        <div className='p-52'/>
        <h1 className='text-8xl mt-80 mb-32'>NUOVA COLLEZIONE</h1>
        <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-blue-100 text-lg shadow m-auto">
            <div className="absolute inset-0 w-3 bg-blue-600 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
            <span className="relative text-blue-400 group-hover:text-red">SCOPRI</span>
        </button>
    </div>

  )
}

export default Home