import React from 'react'
import Section1 from './Section1'
import Statistica from './Statistica'
import Layout from '../Layout/Index'
import Department from '../Pages/Department'

const Main = () => {
  return (
    <>
      <Layout>
        <main className='bg-[#f8f5f5]'>
          <Section1 />
        </main>
      </Layout>
    </>
  )
}

export default Main