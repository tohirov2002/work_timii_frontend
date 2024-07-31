import React from 'react'
import Logo from '../../assets/images/timi_logo.jpg'


const Footer = () => {
  return (
    <footer className='bg-blue-400 pt-7 pb-7'>
      <div className="container">
        <div className='flex  justify-around pt-5'>
          <div className='flex cursor-pointer'>
            <img className='w-[70px] h-[70px] rounded-[50%]' src={Logo} alt="" />
            <h1 className='text-white text-[24px] font-bold max-w-[100px] pl-3'>TIMII IT <span className='pl-3'>DTM</span></h1>
          </div>
          <div>
            <ul className='flex items-center flex-col justify-between cursor-pointer'>
              <li className='text-[20px]  text-white pr-6'>Bo'limlar</li>
              <li className='text-[24px]  text-white pr-6'>Biz haqimizda</li>
              <li className='text-[24px]  text-white pr-6'>Oliygohlar</li>
              <li className='text-[24px]  text-white pr-6'>Yangiliklar</li>
              <li className='text-[24px]  text-white pr-6'>Grantlar</li>
              <li className='text-[24px]  text-white pr-6'>Narxlar</li>
            </ul>
          </div>
          <div>
            <ul className='flex items-center flex-col justify-between cursor-pointer'>
              <li className='text-[20px]  text-white'>Ijtimoiy tarmoqlarda</li>
              <li className='text-[24px]  text-white pr-6'>Teligram</li>
              <li className='text-[24px]  text-white pr-6'>Instagram</li>
              <li className='text-[24px]  text-white pr-6'>Facebook</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer