import React from 'react'
import 'animate.css'

function Timeline() {
  return (
    <div className='mx-5 mb-20'>
      <ul className='timeline timeline-snap-icon max-md:timeline-compact timeline-vertical'>
        <li>
          <div className='timeline-middle'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              className='h-5 w-5'
            >
              <path
                fillRule='evenodd'
                d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                clipRule='evenodd'
              />
            </svg>
          </div>
          <div className='timeline-start mb-10 md:text-end'>
            <time className='font-mono italic badge badge-info'>History</time>
            <div className='text-lg font-black animate__animated animate__fadeInLeft'>
              "Founded in 1985, Springdale Public School has been dedicated to
              providing quality education and holistic development to students.
            </div>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className='timeline-middle'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              className='h-5 w-5'
            >
              <path
                fillRule='evenodd'
                d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                clipRule='evenodd'
              />
            </svg>
          </div>
          <div className='timeline-end mb-10'>
            <time className='font-mono italic badge badge-info'>Vision</time>
            <div className='text-lg font-black animate__animated animate__fadeInRight'>
              To create a learning environment that fosters academic excellence,
              critical thinking, and ethical values.
            </div>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className='timeline-middle'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              className='h-5 w-5'
            >
              <path
                fillRule='evenodd'
                d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                clipRule='evenodd'
              />
            </svg>
          </div>
          <div className='timeline-start mb-10 md:text-end'>
            <time className='font-mono italic badge badge-info'>Mission</time>
            <div className='text-lg font-black animate__animated animate__fadeInLeft'>
              To empower students with the knowledge, skills, and values needed
              to thrive in a dynamic world.
            </div>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className='timeline-middle'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              className='h-5 w-5'
            >
              <path
                fillRule='evenodd'
                d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                clipRule='evenodd'
              />
            </svg>
          </div>
          <div className='timeline-end mb-10'>
            <time className='font-mono italic badge badge-info'>
              Principal's Message
            </time>
            <div className='text-lg font-black animate__animated animate__fadeInRight'>
              At Springdale, we believe in nurturing the potential of every
              student and guiding them towards a successful future.
            </div>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className='timeline-middle'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              className='h-5 w-5'
            >
              <path
                fillRule='evenodd'
                d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                clipRule='evenodd'
              />
            </svg>
          </div>
          <div className='timeline-start mb-10 md:text-end'>
            <time className='font-mono italic badge badge-info'>
              Infrastructure and Facilities
            </time>
            <div className='text-lg font-black animate__animated animate__fadeInLeft'>
              <ul>
                <li>&#x2022; State-of-the-art science and computer labs</li>
                <li>&#x2022; Spacious and well-equipped classrooms</li>
                <li>
                  &#x2022; Library with a vast collection of books and digital
                  resources
                </li>
                <li>
                  &#x2022; Sports facilities including a playground, gymnasium,
                  and swimming pool
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Timeline
