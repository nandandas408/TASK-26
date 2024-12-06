import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='min-h-[90vh] flex flex-col gap-5 justify-center items-center'>
      <h1 className='font-bold text-5xl'>404</h1>
      <p className='text-xl font-medium'>Page not found</p>
      <Link to="/">
        <button 
          className='bg-blue-500 hover:bg-blue-600 px-3 py-1 font-bold rounded-lg text-white'
        >
          Go Home
        </button>
      </Link>
    </div>
  )
}

export default About
