import React from 'react'
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import {logo} from './assets'
import {Home, CreatePost} from './pages'


const App = () => {
  return (
    <BrowserRouter>
      <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b-[#e6eb4]">
        <Link to="/">
          <img src={logo} alt="logo" className="w-28 object-contain" />
        </Link>
       <Link to="/create-post" rel="stylesheet" href="" className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md" >
        Create
       </Link>
      </header>
       <main className="px-4 py-8 sm:p-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost/>}></Route>
        </Routes>
       </main>
    </BrowserRouter>
  )
}

export default App
