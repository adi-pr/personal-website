import { About, Footer, Hero, Hobbies, Skills } from '@/components'
import React from 'react'

const Home = () => {
  return (
    <main>
      <Hero /> 
      <About />
      <Hobbies />
      <Skills />
      <Footer /> 
    </main>
  )
}

export default Home