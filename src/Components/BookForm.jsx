import React, { useContext } from 'react'
import { useState } from 'react/cjs/react.development'
import { BookContext } from '../context/BookContext'

function BookForm() {
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const {dispatch} = useContext(BookContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        if(title === "" || author === ""){
            return false
        } else {
            dispatch({type: 'ADD_BOOK', book: {
                title, author
            }})
            setTitle("")
            setAuthor("")
        }
    }

    return (
        <form className="m-auto container mt-8 text-center " onSubmit={handleSubmit} >
            <div>
                <input className="outline-none py-2 px-2 mb-3 w-full md:w-6/12" type="text" placeholder="Book Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
                <input className="outline-none py-2 px-2 mb-8 w-full md:w-6/12" type="text" placeholder="Book Author" value={author} onChange={(e) => setAuthor(e.target.value)} />
            </div>
            <div>
                <button className="w-full md:w-6/12 outline-none py-2 px-2 mb-3 bg-gray-800 text-white">Add Book</button>
            </div>
        </form>
    )
}

export default BookForm
