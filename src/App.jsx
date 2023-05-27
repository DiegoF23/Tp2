import React from 'react'
import Home from './pages/Home'
import Contact from './pages/Contact'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
function App() {
  

  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
           <Route path="/contact" element={<Contact/>}/>
          {/*<Route path='/character/:id' element={<Character/>}/>
          <Route path="*" element={<Error404/>}/> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
