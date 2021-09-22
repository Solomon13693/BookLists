import React, { useContext } from 'react'
import BookDetails from './BookDetails'
import {BookContext} from '../context/BookContext'

function BookLists() {
    const {books} = useContext(BookContext)
    return (books.length ? (
        <div>
            {books.map((book) => (
                <BookDetails book={book} />
            ))}
        </div>
    ) : (
        <div className="w-full md:w-6/12 m-auto text-white text-center mt-3 bg-gray-700 py-3">No books avaliable to read...</div>
    )
        
    )
}

export default BookLists


