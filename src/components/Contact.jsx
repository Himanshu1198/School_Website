import React, { useState } from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import { Resend } from 'resend'
import { Email } from './Email'
// Set the dimensions of the map
const mapContainerStyle = {
  height: '300px',
  width: '50%',
}

// Set the initial center of the map
const center = {
  lat: -3.745,
  lng: -38.523,
}

// Set your Google Maps API key
const apiKey = 'AIzaSyAhRuxhx0nGyFX8HbJRhZ8gsGNsAEEoaiI'

function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [text, setText] = useState('')

  function isValidEmail(email) {
    // Regular expression for validating an email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    // Test the email against the regex
    return emailRegex.test(email)
  }

  const sendEmail = async () => {
    if (!isValidEmail(email)) {
      alert('Invalid Email!')
      return
    }

    alert('Email sent!')
  }
  return (
    <div className='mb-20'>
      <div className='flex justify-center items-center'>
        <div className='flex flex-col justify-center items-center border w-fit p-6 rounded-md m-7 text-center'>
          <div>
            <span className=' font-bold'>Address: </span>Springdale Public
            School, 123 Education Lane, Cityville, Maharashtra - 093 490
          </div>
          <div>
            <span className=' font-bold'>Phone: </span>+1 (123) 456-7890
          </div>
          <div>
            <span className=' font-bold'>Email: </span>info@springdale.edu
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-3 my-10 items-center justify-center'>
        <div>
          <label className='input input-bordered flex items-center gap-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 16 16'
              fill='currentColor'
              className='h-4 w-4 opacity-70'
            >
              <path d='M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z' />
            </svg>
            <input
              type='text'
              className='grow'
              placeholder='Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label className='input input-bordered flex items-center gap-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 16 16'
              fill='currentColor'
              className='h-4 w-4 opacity-70'
            >
              <path d='M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z' />
              <path d='M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z' />
            </svg>
            <input
              type='text'
              className='grow'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div>
          <textarea
            className='textarea textarea-bordered h-52 w-60'
            placeholder='Enter message here...'
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
        </div>
        <div>
          <button className='btn btn-primary' onClick={sendEmail}>
            Send Email
          </button>
        </div>
      </div>
      <div className='map flex justify-center items-center'>
        <LoadScript googleMapsApiKey={apiKey}>
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={center}
            zoom={10}
          >
            {/* You can add markers or other map components here */}
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  )
}

export default Contact
