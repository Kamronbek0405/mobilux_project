import React from 'react'
import AboutLayout from './layout'
import { Banners } from '../home/banners'
import { Phone } from '../home/phone'


 const About = async () => {

  return (
   <div className='flex'>
    <AboutLayout/>
    <div>
     <section>
      <Banners/>
     </section>
     <section>
      <Phone/>
     </section>
    </div>
   </div>
  )
}

export default About