import React from 'react'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import Aboutme from '../components/Aboutme'
import Skill from '../components/Skill'
import CTA from '../components/CTA'

const Page1 = () => {
  return (
    <div className=' w-full min-h-screen '>
      <Navbar/>
      <Main/>
      <Aboutme/>
      <Skill/>
      <CTA/>
    </div>
  )
}

export default Page1
