import React, { useState } from 'react'
import Logo from '../../assets/images/timi_logo.jpg'
import { IoSunny } from "react-icons/io5";
import { NavLink } from 'react-router-dom';

const Header = () => {

  const userData = JSON.parse(localStorage.getItem('user'));

  const userName = userData ? userData.username : null;

  return (
    <>
      <header className='bg-[#e5e3e3]'>
        <div className="container">
          <div className='pt-3 pb-3 flex items-center justify-between'>
            <div className='flex items-center cursor-pointer'>
              <NavLink to={'/'}>
                <div className='flex items-center'>
                  <img className='w-[70px] h-[70px] rounded-[50%]' src={Logo} alt="" />
                  <h1 className='text-[#2D3663] text-[24px] font-bold max-w-[100px] pl-3'>TIMII IT <span className='pl-3'>DTM</span></h1>
                </div>
              </NavLink>
              <ul className='flex items-center justify-between pl-[180px]'>
                <li className='text-[24px]  text-[#2D3663] pr-6'>Biz haqimizda</li>
                <li className='text-[24px]  text-[#2D3663] pr-6'>Oliygohlar</li>
                <li className='text-[24px]  text-[#2D3663] pr-6'>Yangiliklar</li>
                <li className='text-[24px]  text-[#2D3663] pr-6'>Grantlar</li>
                <li className='text-[24px]  text-[#2D3663] pr-6'>Narxlar</li>
              </ul>
            </div>
            <ul className='flex items-cente cursor-pointer'>
              {userName ? <span className='bg-blue-500 text-white p-2 rounded-md text-[16px] mr-4'>{userName}</span> : <li className='pr-6'>
                <NavLink to={'/register'}>
                  <button className='bg-blue-500 text-white w-[100px] p-2 rounded-md text-[16px] mr-5'>Kirish</button>
                </NavLink>
                <NavLink to={'/register'}>
                  <button className='bg-blue-500 text-white w-[150px] p-2 rounded-md text-[16px]'>Ro'yxatdan o'tish</button>
                </NavLink>
              </li>}
              <li className='pr-5'>
                <IoSunny className='text-yellow-600 w-[30px] h-[30px]' />
              </li>
              <li className='mt-1'>
                <h1>UZ</h1>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header