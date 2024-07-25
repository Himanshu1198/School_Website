import React from 'react'

function Admissions() {
  return (
    <div className='flex flex-col flex-wrap'>
      <div className='flex items-center justify-center my-10'>
        <a
          href='public/StandardForm.pdf'
          download='AdmissionForm.pdf'
          className='btn btn-accent'
        >
          Download PDF
        </a>
      </div>
      <div className='text-center text-wrap mx-4 text-lg'>
        Admission is based on merit and availability of seats. Entrance tests
        may be conducted for certain grades.
      </div>
      <div className='flex flex-col gap-2 justify-center items-center flex-wrap my-10 mx-3'>
        <div className='badge badge-accent text-xl p-6 h-auto w-auto'>
          Admission Form Availability: March 1st
        </div>
        <div className='badge badge-accent text-xl p-6 h-auto w-auto'>
          Last Date for Submission: March 31st
        </div>
        <div className='badge badge-accent text-xl p-6 h-auto w-auto'>
          Entrance Test: April 15th
        </div>
        <div className='badge badge-accent text-xl p-6 h-auto w-auto'>
          Announcement of Results: April 30th
        </div>
      </div>
    </div>
  )
}

export default Admissions
