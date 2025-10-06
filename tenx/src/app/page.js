import React from 'react'
import Nav from './component/Nav'
import Home from './component/Home'
import Services from './component/Services'
import Project from './component/Project'
import Contact from './component/Contact'

const page = () => {
  return (
    <div className=' min-h-screen'>
      <Nav/>
      <Home/>
      <Services/>
      <Project/>
      <Contact/>
    </div>
  )
}

export default page
