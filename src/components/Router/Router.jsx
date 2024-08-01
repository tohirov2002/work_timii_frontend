import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from '../Main/Main'
import Registration from '../Authencation/Register'
import Department from '../Pages/Department'
import Abiturent from '../Pages/Abiturent'

const Router = () => {
  return (
            <Routes>
                <Route path='/' element={<Main/>}/>
                <Route path='/register' element={<Registration/>}/>
                <Route path='/departament' element={<Department/>}/>
                <Route path='/abiturent' element={<Abiturent/>}/>
            </Routes>
  )
}
export default Router