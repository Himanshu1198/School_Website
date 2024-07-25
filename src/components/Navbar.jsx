import React from 'react'
import Logo from '../assets/Logo.jpeg'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <div className='navbar bg-base-100'>
        <div className='navbar-start'>
          <div className='dropdown'>
            <div
              tabIndex={0}
              role='button'
              className='btn btn-ghost btn-circle'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16M4 18h7'
                />
              </svg>
            </div>
            <div>
              <ul
                tabIndex={0}
                className='menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow'
              >
                <li>
                  <Link to={'/'}>Home</Link>
                </li>
                <li>
                  <Link to={'/about'}>About Us</Link>
                </li>
                <li>
                  <Link to={'/academics'}>Academics</Link>
                </li>
                <li>
                  <Link to={'/admissions'}>Admissions</Link>
                </li>
                <li>
                  <Link to={'/faculty'}>Faculty</Link>
                </li>
                <li>
                  <Link to={'/students'}>Students</Link>
                </li>
                <li>
                  <Link to={'/gallery'}>Gallery</Link>
                </li>
                <li>
                  <Link to={'/contact'}>Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='navbar-end m-3'>
          <Link to={'/'}>
            <img
              src={Logo}
              alt=''
              className='h-10 w-10 rounded-full cursor-pointer'
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
