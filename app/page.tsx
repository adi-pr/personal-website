import { About, Hero, Hobbies } from '@/components'
import React from 'react'

const Home = () => {
  return (
    <main className=''>
      <Hero /> 
      <About />
      <Hobbies />
    </main>
  )
}

export default Home