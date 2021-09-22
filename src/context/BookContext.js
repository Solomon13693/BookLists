import React, { useEffect, useReducer } from 'react'
import { createContext } from 'react/cjs/react.development'
import { BookReducer } from '../reducer/BookReducer'

export const BookContext = createContext()

export const BookContextProvider = ({children}) => {

    const [books, dispatch] = useReducer(BookReducer, [], () => {
        const localData = localStorage.getItem('books')
        return localData ? JSON.parse(localData) : []
    } )

    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books))
    }, [books])

    return (
        <BookContext.Provider value={{books, dispatch}} >
            {children}
        </BookContext.Provider>
    )
}
