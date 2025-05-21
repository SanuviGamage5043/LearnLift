import React from 'react'
import Navbar from './Navbar'

const Home = () => {
  return (
    <div id="home" className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden bg-color-white ' style={{backgroundImage:"url('/header.png')"}}>
      <Navbar/>
    </div>
  )
}

export default Home
