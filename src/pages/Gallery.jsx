import React from 'react'
import 'animate.css'

function Gallery() {
  const Gallery = [
    {
      title: 'Sports Day',
      desc: 'Students participating in various sports events.',
      image:
        'https://plus.unsplash.com/premium_photo-1661605580681-ca6d8e39c49b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3BvcnRzX2RheXxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      title: 'Science Exhibition',
      desc: 'Students presenting their science projects.',
      image:
        'https://media.istockphoto.com/id/1367212213/photo/girl-with-test-tube-and-enthusiastic-children-with-teacher.webp?b=1&s=170667a&w=0&k=20&c=O0gYikR3z7DpjAmy0i-p5IlhKugongYDPMrFY9aF97A=',
    },
    {
      title: 'Cultural Fest',
      desc: 'Students performing in the cultural fest.',
      image:
        'https://media.istockphoto.com/id/1152219197/photo/colorful-pennant-isolated-abstract-of-cerebration-multicolor-of-flags.webp?b=1&s=170667a&w=0&k=20&c=_Xf9Liab2wc0RDX5NBVxhf5oze-GS6mA3ib-nwhCifo=',
    },
    {
      title: 'Classroom',
      desc: 'A glimpse of our interactive classrooms.',
      image:
        'https://media.istockphoto.com/id/1901752599/photo/secondary-or-high-school-students-studying-wind-turbines-in-science-class-with-teacher.webp?b=1&s=170667a&w=0&k=20&c=3quV75qXbxkbTpSks6S081Q0VcE7RJEpc9gNAntv448=',
    },
    {
      title: 'Library',
      desc: 'Students reading and studying in the school library.',
      image:
        'https://media.istockphoto.com/id/904608314/photo/business-colleagues-at-desks-in-a-busy-open-plan-office.webp?b=1&s=170667a&w=0&k=20&c=rZ6mcTQRRXhBUfhivEFGkhyXr5B2gORkhIIPOjbnvSg=',
    },
  ]

  return (
    <div className='mb-20'>
      <div className='flex flex-wrap items-center justify-center'>
        {Gallery.map((event) => (
          <article
            className='relative flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto mt-24'
            key={event.title}
          >
            <img
              src={event.image}
              alt={`${event.title} event`}
              className='absolute inset-0 h-full w-full object-cover animate__animated animate__zoomIn'
              loading='lazy'
              style={{
                WebkitBoxShadow: '10px 10px 88px 0px rgba(0,0,0,0.75)',
                MozBoxShadow: '10px 10px 88px 0px rgba(0,0,0,0.75)',
                boxShadow: '10px 10px 88px 0px rgba(0,0,0,0.75)',
              }}
            />
            <div className='absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40'></div>
            <h3 className='z-10 mt-3 text-3xl font-bold text-white animate__animated animate__zoomIn'>
              {event.title}
            </h3>
            <div className='z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300 animate__animated animate__zoomIn'>
              {event.desc}
            </div>
          </article>
        ))}
      </div>
      <div className='relative w-full max-w-4xl mx-auto my-8'>
        <div className='aspect-w-16 aspect-h-9 mx-4'>
          <iframe
            className='absolute inset-0 w-full h-full rounded-xl'
            style={{
              WebkitBoxShadow: '10px 10px 88px 0px rgba(0,0,0,0.75)',
              MozBoxShadow: '10px 10px 88px 0px rgba(0,0,0,0.75)',
              boxShadow: '10px 10px 88px 0px rgba(0,0,0,0.75)',
            }}
            src='https://www.youtube.com/embed/qfdhECP0qt8'
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className='relative w-full max-w-4xl mx-auto my-8'>
        <div className='aspect-w-16 aspect-h-9 mx-4'>
          <iframe
            className='absolute inset-0 w-full h-full rounded-xl'
            src='https://www.youtube.com/embed/4yAgw56sBJ0'
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            style={{
              WebkitBoxShadow: '10px 10px 88px 0px rgba(0,0,0,0.75)',
              MozBoxShadow: '10px 10px 88px 0px rgba(0,0,0,0.75)',
              boxShadow: '10px 10px 88px 0px rgba(0,0,0,0.75)',
            }}
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default Gallery
