import React, { useContext } from 'react'
import {BookContext} from '../context/BookContext'

function BookDetails({book}) {
    const {dispatch} = useContext(BookContext)
    return (
        <div className="bg-gray-800 py-2 mt-3 px-5 w-full md:w-6/12 m-auto container text-white hover:line-through" onClick={() => dispatch({type: 'REMOVE_BOOK', id: book.id })} >
            <h1 className="font-bold text-2xl">{book.title}</h1>
            <p className="font-light text-md">{book.author}</p>
        </div>
    )
}

export default BookDetails
