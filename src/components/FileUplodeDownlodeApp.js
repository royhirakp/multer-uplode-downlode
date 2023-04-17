import React from 'react'
import Login from './Login/Login'
import Register from './register/Register'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './mainPage/MainPage';
const FileUplodeDownlodeApp = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element ={<Login/>}/>
                <Route path='/register' element ={<Register/>}/>
                <Route path='/main' element={<MainPage/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default FileUplodeDownlodeApp
