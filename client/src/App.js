import React from 'react'
import './App.css'
import Login from './Component/Login'
import Signup from './Component/Signup'
import 'antd/dist/reset.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
   <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Signup />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
   </>
  )
}

export default App