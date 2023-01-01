import React from 'react'
import './App.css'
import Login from './Component/Login'
import Signup from './Component/Signup'
import Todos from './Component/Todos'
import 'antd/dist/reset.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
   <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/todos' element={<Todos />} />
        </Routes>
      </BrowserRouter>
   </>
  )
}

export default App