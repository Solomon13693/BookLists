import React from 'react'
import Header from './Components/Header'
import BookForm from './Components/BookForm'
import BookLists from './Components/BookLists'
import { BookContextProvider } from './context/BookContext'
import NavBar from './Components/Nav'

function App() {
  return (
        <div className="">
            <BookContextProvider>
              <NavBar/>
            <Header/>
            <BookLists/>
            <BookForm/>
        </BookContextProvider>'
        </div>
  )
}

export default App
