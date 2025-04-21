import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import Aboutme from '../components/Aboutme'
import Skill from '../components/Skill'
import CTA from '../components/CTA'
import LocomotiveScroll from 'locomotive-scroll';
import Skills from '../components/Skills'


const Page1 = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className=' w-full min-h-screen '>
      <Helmet>
        <title>Zain Ul Abdin | Product Marketing Specialist & Growth Strategist</title>
        <meta name="description" content="Product Marketing Specialist & Growth Strategist specializing in SEO, Reddit growth hacking, and digital marketing. Proven track record of scaling businesses through organic growth and strategic marketing." />
        <meta name="keywords" content="Product Marketing, Growth Strategy, SEO, Reddit Marketing, Digital Marketing, Marketing Specialist" />
        <meta property="og:title" content="Zain Ul Abdin | Product Marketing Specialist" />
        <meta property="og:description" content="Expert in SEO, Reddit growth hacking, and digital marketing strategies. Delivering exceptional ROI through organic growth." />
        <meta property="og:type" content="website" />
      </Helmet>
      <Navbar/>
      <Main/>
      <Aboutme/>
      <Skills/>
      <Skill/>
      <CTA/>
    </div>
  )
}

export default Page1