import React from 'react'
import yangilik from '../../../src/assets/images/yangilik.jpg'
import yangilik1 from '../../../src/assets/images/yangilik1.jpg'
import yangilik2 from '../../../src/assets/images/yangilik2.jpg'
import yangilik3 from '../../../src/assets/images/yangilik3.jpeg'
import Statistica from './Statistica'


const Section1 = () => {

  const userData = JSON.parse(localStorage.getItem('user'));

  const userName = userData ? userData.username : null;

  return (
    <>
      <section className='flex items-center justify-center bg-blue-50'>
        <div className='bg-blue-400 w-full max-w-[1000px] rounded-xl'>
          <h1 className='text-white font-bold text-[24px] flex items-center justify-center p-[35px]'><span className='text-[32px] pr-3'>TIMII IT </span> talabasiga aylaning, kelajagingizga befarq bulmang! </h1>
        </div>
      </section>
      <section className='container'>
        <div className='flex items-center justify-around mt-[50px]'>
          <div className='w-full max-w-[500px] bg-blue-600 hover:bg-green-600 flex items-center justify-center flex-col h-[300px] rounded-xl cursor-pointer cours'>
            <h1 className='text-white text-[22px]'>DTM testlar</h1>
            <h1 className='text-white text-[30px] pt-4'>O'quv markaz uchun</h1>
            {userName ?
              <button className='text-white w-[120px] rounded-md bg-green-500 hover:bg-blue-500 p-2 mt-6 btn'>batafsil</button> :
              <button className='text-white w-[120px] rounded-md bg-green-500 hover:bg-blue-500 p-2 mt-6 btn'>kirish</button>
            }
          </div>
          <div className='w-full max-w-[500px] bg-green-600 hover:bg-blue-600 flex items-center justify-center flex-col h-[300px] rounded-xl cursor-pointer cours cours1'>
            <h1 className='text-white text-[22px]'>DTM testlar</h1>
            <h1 className='text-white text-[30px] pt-4'>Abiturient uchun</h1>
            {userName ?
              <button className='text-white w-[120px] rounded-md bg-blue-600 hover:bg-blue-500 p-2 mt-6 btn'>batafsil</button>:
              <button className='text-white w-[120px] rounded-md bg-blue-600 hover:bg-blue-500 p-2 mt-6 btn'>kirish</button>
            }
          </div>
        </div>
        <div>
          <h1 className='text-[32px] font-bold text-blue-950 mt-[80px] text-center'>Reyting baland O'quv markazlar</h1>
          <Statistica />
        </div>
        <div>
          <div className='border-b-4'>
            <h1 className='text-[32px] font-bold text-blue-950 mt-[100px]'>Ta‘lim yangiliklari</h1>
          </div>
          <div className='mt-[40px]'>
            <ul className='flex items-center justify-between cursor-pointer'>
              <li>
                <img className='max-w-[350px] h-[250px] rounded-sm cours' src={yangilik} alt="" />
                <p className='text-[16px] text-[#919090] max-w-[400px] pl-1 mt-[15px]'>qo'shilgan vaqti: 17:08</p>
                <h1 className='text-[16px] text-blue-950 max-w-[350px] pl-1 mt-[15px]'>Joriy yil bitiruvchilarining 40 foizi 56,7 ballni to‘play olmagan</h1>
              </li>
              <li>
                <img className='max-w-[350px] h-[250px] rounded-sm cours' src={yangilik1} alt="" />
                <p className='text-[16px] text-[#919090] max-w-[400px] pl-1 mt-[15px]'>qo'shilgan vaqti: 17:08</p>
                <h1 className='text-[16px] text-blue-950 max-w-[350px] pl-1 mt-[15px]'>Joriy yil bitiruvchilarining 40 foizi 56,7 ballni to‘play olmagan</h1>
              </li>
              <li>
                <img className='max-w-[350px] h-[250px] rounded-sm cours' src={yangilik2} alt="" />
                <p className='text-[16px] text-[#919090] max-w-[400px] pl-1 mt-[15px]'>qo'shilgan vaqti: 17:08</p>
                <h1 className='text-[16px] text-blue-950 max-w-[350px] pl-1 mt-[15px]'>Joriy yil bitiruvchilarining 40 foizi 56,7 ballni to‘play olmagan</h1>
              </li>
              <li>
                <img className='max-w-[350px] h-[250px] rounded-sm cours' src={yangilik3} alt="" />
                <p className='text-[16px] text-[#919090] max-w-[400px] pl-1 mt-[15px]'>qo'shilgan vaqti: 17:08</p>
                <h1 className='text-[16px] text-blue-950 max-w-[350px] pl-1 mt-[15px]'>Joriy yil bitiruvchilarining 40 foizi 56,7 ballni to‘play olmagan</h1>
              </li>
            </ul>
            <ul className='flex items-center justify-between mt-[50px] cursor-pointer'>
              <li>
                <img className='max-w-[350px] h-[250px] rounded-sm cours' src={yangilik3} alt="" />
                <p className='text-[16px] text-[#919090] max-w-[400px] pl-1 mt-[15px]'>qo'shilgan vaqti: 17:08</p>
                <h1 className='text-[16px] text-blue-950 max-w-[350px] pl-1 mt-[15px]'>Joriy yil bitiruvchilarining 40 foizi 56,7 ballni to‘play olmagan</h1>
              </li>
              <li>
                <img className='max-w-[350px] h-[250px] rounded-sm cours' src={yangilik2} alt="" />
                <p className='text-[16px] text-[#919090] max-w-[400px] pl-1 mt-[15px]'>qo'shilgan vaqti: 17:08</p>
                <h1 className='text-[16px] text-blue-950 max-w-[350px] pl-1 mt-[15px]'>Joriy yil bitiruvchilarining 40 foizi 56,7 ballni to‘play olmagan</h1>
              </li>
              <li>
                <img className='max-w-[350px] h-[250px] rounded-sm cours' src={yangilik1} alt="" />
                <p className='text-[16px] text-[#919090] max-w-[400px] pl-1 mt-[15px]'>qo'shilgan vaqti: 17:08</p>
                <h1 className='text-[16px] text-blue-950 max-w-[350px] pl-1 mt-[15px]'>Joriy yil bitiruvchilarining 40 foizi 56,7 ballni to‘play olmagan</h1>
              </li>
              <li>
                <img className='max-w-[350px] h-[250px] rounded-sm cours' src={yangilik} alt="" />
                <p className='text-[16px] text-[#919090] max-w-[400px] pl-1 mt-[15px]'>qo'shilgan vaqti: 17:08</p>
                <h1 className='text-[16px] text-blue-950 max-w-[350px] pl-1 mt-[15px]'>Joriy yil bitiruvchilarining 40 foizi 56,7 ballni to‘play olmagan</h1>
              </li>
            </ul>
            <div className='mt-[40px] flex items-center justify-center'>
              <button className='w-[200px] bg-blue-600 text-white p-4 rounded-md text-[18px] btns'>Barcha Yangiliklar</button>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-blue-50 pb-[50px]'>
        <div className='container'>
          <div className='border-b-4'>
            <h1 className='text-[32px] font-bold text-blue-950 mt-[50px] pt-8'>Grantlar</h1>
          </div>
          <div className='mt-[40px]'>
            <ul className='flex items-center justify-between cursor-pointer'>
              <li>
                <img className='max-w-[350px] h-[250px] rounded-sm cours' src={yangilik} alt="" />
                <p className='text-[16px] text-[#919090] max-w-[400px] pl-1 mt-[15px]'>qo'shilgan vaqti: 17:08</p>
                <h1 className='text-[16px] text-blue-950 max-w-[350px] pl-1 mt-[15px]'>Xorijiy universitetni qanday tanlash lozim - qisqa gayd</h1>
              </li>
              <li>
                <img className='max-w-[350px] h-[250px] rounded-sm cours' src={yangilik1} alt="" />
                <p className='text-[16px] text-[#919090] max-w-[400px] pl-1 mt-[15px]'>qo'shilgan vaqti: 17:08</p>
                <h1 className='text-[16px] text-blue-950 max-w-[350px] pl-1 mt-[15px]'>Xorijiy universitetni qanday tanlash lozim - qisqa gayd</h1>
              </li>
              <li>
                <img className='max-w-[350px] h-[250px] rounded-sm cours' src={yangilik2} alt="" />
                <p className='text-[16px] text-[#919090] max-w-[400px] pl-1 mt-[15px]'>qo'shilgan vaqti: 17:08</p>
                <h1 className='text-[16px] text-blue-950 max-w-[350px] pl-1 mt-[15px]'>IELTS imtihoniga tayyorlanish uchun 12 ta eng yaxshi manba</h1>
              </li>
              <li>
                <img className='max-w-[350px] h-[250px] rounded-sm cours' src={yangilik3} alt="" />
                <p className='text-[16px] text-[#919090] max-w-[400px] pl-1 mt-[15px]'>qo'shilgan vaqti: 17:08</p>
                <h1 className='text-[16px] text-blue-950 max-w-[350px] pl-1 mt-[15px]'>IELTS imtihoniga tayyorlanish uchun 12 ta eng yaxshi manba</h1>
              </li>
            </ul>
            <div className='mt-[40px] flex items-center justify-center'>
              <button className='w-[200px] bg-blue-600 text-white p-4 rounded-md text-[18px] btns'>Barcha Grantlar</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Section1