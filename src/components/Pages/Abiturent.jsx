import React from 'react'
import { NavLink } from 'react-router-dom'
import Layout from '../Layout/Index'

const Abiturent = () => {
    return (
        <Layout>
            <section>
                <div className="container">
                    <div className='mt-[40px]'>
                        <h1 className='text-center text-[32px] font-bold font-serif text-[#2D3663]'>Abiturentlar uchun mo'ljallangan DTM testlar</h1>
                    </div>
                    <div className='flex items-center justify-around mt-[40px] mb-[50px]'>
                        <div className='w-full max-w-[350px] bg-blue-600 hover:bg-green-600 flex items-center justify-center flex-col h-[300px] rounded-xl cursor-pointer cours'>
                            <h1 className='text-white text-[22px]'>DTM</h1>
                            <h1 className='text-white text-[30px] pt-4'>1 ta</h1>
                            <NavLink className={'nav1'}>
                                <button className='text-white w-[120px] rounded-md bg-green-500 hover:bg-blue-500 p-2 mt-6 button1 btn button2'>Sotib olish</button>
                            </NavLink>
                        </div>
                        <div className='box w-full max-w-[350px] bg-green-600 hover:bg-blue-600 flex items-center justify-center flex-col h-[300px] rounded-xl cursor-pointer cours cours1'>
                            <h1 className='text-white text-[22px]'>DTM</h1>
                            <h1 className='text-white text-[30px] pt-4'>10 ta</h1>
                            <NavLink className={'nav'}>
                                <button className='text-white w-[120px] rounded-md bg-blue-600 hover:bg-blue-500 p-2 mt-6 btn button1'>Sotib olish</button>
                            </NavLink>
                        </div>
                        <div className='box w-full max-w-[350px] bg-yellow-600 hover:bg-blue-600 flex items-center justify-center flex-col h-[300px] rounded-xl cursor-pointer cours'>
                            <h1 className='text-white text-[22px]'>DTM</h1>
                            <h1 className='text-white text-[30px] pt-4'>50 ta</h1>
                            <NavLink className={'nav'}>
                                <button className='text-white w-[120px] rounded-md bg-blue-600 hover:bg-blue-500 p-2 mt-6 btn button1'>Sotib olish</button>
                            </NavLink>
                        </div>
                        <div className='box w-full max-w-[350px] bg-[#2D3663] hover:bg-blue-600 flex items-center justify-center flex-col h-[300px] rounded-xl cursor-pointer cours'>
                            <h1 className='text-white text-[22px]'>DTM</h1>
                            <h1 className='text-white text-[30px] pt-4'>100 ta</h1>
                            <NavLink className={'nav'}>
                                <button className='text-white w-[120px] rounded-md bg-blue-600 hover:bg-blue-500 p-2 mt-6 btn button1'>Sotib olish</button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Abiturent