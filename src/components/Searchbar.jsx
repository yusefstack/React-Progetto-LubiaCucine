import React from 'react'

const Searchbar = (props) => {
return (
    <div className="flex-1 flex justify-center m-auto px-2 mt-10 lg:ml-6">
        <div className="max-w-2xl w-full">
            <label htmlFor="search" className="sr-only">Search </label>
            <form onSubmit={props.handleSubmit} className="relative z-50">
            <button type="submit" id="searchsubmit" className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
                </svg>
            </button>
            <input type="text" value={props.value} onChange={props.handleChange} className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-gray-700 text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-white focus:text-gray-900 sm:text-sm transition duration-150 ease-in-out" placeholder="Search"/>
            </form>
        </div>
    </div>
)
}

export default Searchbar