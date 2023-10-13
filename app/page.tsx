import { About, Hero, Hobbies, Skills } from '@/components'
import React from 'react'

const Home = () => {
  return (
    <main className=''>
      <Hero /> 
      <About />
      <Hobbies />
      <Skills />
    </main>
  )
}

export default Home