import React from 'react'
import Logo from '../assets/Logo.jpeg'
import 'animate.css'

function Introduction() {
  return (
    <div className='flex justify-center items-center lg:my-32 mx-4'>
      <div className='flex gap-10 lg:gap-20 flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row'>
        <div className='logo flex items-center justify-center'>
          <img
            src={Logo}
            alt=''
            className='h-80 w-80 rounded-full'
            loading='lazy'
            style={{
              WebkitBoxShadow: '10px 10px 88px 0px rgba(0,0,0,0.75)',
              MozBoxShadow: '10px 10px 88px 0px rgba(0,0,0,0.75)',
              boxShadow: '10px 10px 88px 0px rgba(0,0,0,0.75)',
            }}
          />
        </div>
        <div className='flex text-xl lg:text-4xl tracking-wider text-wrap w-96 text-center items-center justify-center'>
          Welcome to Springdale Public School, where we nurture young minds for
          a brighter future.
        </div>
      </div>
    </div>
  )
}

export default Introduction
