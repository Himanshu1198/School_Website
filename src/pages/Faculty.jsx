import React from 'react'
import 'animate.css'

function Faculty() {
  const people = [
    {
      position: 'Principal',
      img: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJpbmNpcGFsJTIwcHJvZmlsZSUyMHNxdWFyZXxlbnwwfHwwfHx8MA%3D%3D',
      name: 'John Doe',
      exp: 'M.Ed, 20 years of experience in educational administration',
      social: '#',
    },
    {
      position: 'Vice Principal',
      img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmVtYWxlJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D',
      name: 'Jane Smith',
      exp: 'M.Sc. in Physics, 15 years of teaching experience',
      social: '#',
    },
    {
      position: 'English Teacher',
      img: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZmVtYWxlJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D',
      name: 'Emily Johnson',
      exp: 'M.A. in English, 10 years of teaching experience',
      social: '#',
    },
    {
      position: 'Mathematics Teacher',
      img: 'https://images.unsplash.com/photo-1719970341491-51224a244748?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D',
      name: 'Michael Brown',
      exp: 'M.Sc. in Mathematics, 8 years of teaching experience',
      social: '#',
    },
    {
      position: 'Science Teacher',
      img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZlbWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D',
      name: 'Sophia Davis',
      exp: 'M.Sc. in Chemistry, 12 years of teaching experience',
      social: '#',
    },
    {
      position: 'Computer Science Teacher',
      img: 'https://images.unsplash.com/photo-1718862458505-b8d9a68f8a7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D',
      name: 'David Wilson',
      exp: 'B.Tech in Computer Science, 5 years of teaching experience',
      social: '#',
    },
  ]

  return (
    <div className='mx-6 my-10 mb-96'>
      <div class='h-screen w-full flex flex-wrap items-center justify-center dark:bg-gray-900'>
        {people.map((person) => (
          <div
            className='card bg-base-100 max-w-96 h-80 shadow-xl mx-5 my-2 animate__animated animate__tada'
            style={{
              WebkitBoxShadow: '10px 10px 88px 0px rgba(0,0,0,0.75)',
              MozBoxShadow: '10px 10px 88px 0px rgba(0,0,0,0.75)',
              boxShadow: '10px 10px 88px 0px rgba(0,0,0,0.75)',
            }}
          >
            <figure className='px-10 pt-10'>
              <img
                src={person.img}
                alt='Shoes'
                className='rounded-full h-24 w-24'
              />
            </figure>
            <div className='card-body items-center text-center'>
              <h2 className='card-title'>
                {person.name} ({person.position})
              </h2>
              <p>{person.exp}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Faculty
