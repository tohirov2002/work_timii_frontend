import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from '../Main/Main'
import Registration from '../Authencation/Register'

const Router = () => {
  return (
            <Routes>
                <Route path='/' element={<Main/>}/>
                <Route path='/register' element={<Registration/>}/>
            </Routes>
  )
}
export default Router