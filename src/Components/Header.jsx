import React from 'react'
import { useContext } from 'react/cjs/react.development'
import { BookContext } from '../context/BookContext'

function Header() {
    const {books} = useContext(BookContext)
    return (
        <div className="bg-gray-800 py-5 mt-3 w-full md:w-6/12 m-auto container text-center text-white ">
            <h1 className="text-4xl mb-3 font-bold">Shalom Brand</h1>
            <p className="font-light">Currently you have <span className="font-bold">{books.length}</span> to get through......</p>
        </div>
    )
}

export default Header

