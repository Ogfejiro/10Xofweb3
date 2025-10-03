import React from 'react'
import Nav from './component/Nav'
import Home from './component/Home'
import Services from './component/Services'

const page = () => {
  return (
    <div className=' min-h-screen'>
      <Nav/>
      <Home/>
      <Services/>
    </div>
  )
}

export default page
