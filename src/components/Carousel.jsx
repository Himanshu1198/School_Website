import React from 'react'
import 'animate.css'
function Carousel() {
  const Items = [
    {
      id: 'item1',
      src: 'https://media.istockphoto.com/id/171259655/photo/exterior-of-modern-commercial-building-blue-sky.webp?b=1&s=170667a&w=0&k=20&c=1-iiBQHy9zmguAF5jUScqgr1n91iyo9Lef3I6MRBOFg=',
    },
    {
      id: 'item2',
      src: 'https://media.istockphoto.com/id/1338737959/photo/little-kids-schoolchildren-pupils-students-running-hurrying-to-the-school-building-for.webp?b=1&s=170667a&w=0&k=20&c=D1CYdH3EvNWkvWaufBSJgb3Da1uJDX4ElLS3HxcB7LA=',
    },
    {
      id: 'item3',
      src: 'https://media.istockphoto.com/id/139750040/photo/empty-classroom-with-chairs-and-white-board.webp?b=1&s=170667a&w=0&k=20&c=JBrUUuIWfIuDvii2QUH9H6VLgrgIvJiSZDqLoAmWs_I=',
    },
    {
      id: 'item4',
      src: 'https://media.istockphoto.com/id/876683272/photo/elementry-school-with-large-apartment-buildings-on-the-background-no-people.webp?b=1&s=170667a&w=0&k=20&c=Bv0VovzVeXUe-rMEhKUjgheK-Or6KKLfGaVqxe1j8iA=',
    },
  ]
  return (
    <div className='mx-6'>
      <div className='carousel w-full mt-10 mb-6'>
        {Items.map((item) => (
          <div id={item.id} className='carousel-item w-full' key={item.id}>
            <img
              src={item.src}
              className='w-full rounded-2xl h-52 sm:h-72 md:h-72 lg:h-96 animate__animated animate__flipInX'
              loading='lazy'
              style={{
                WebkitBoxShadow: '10px 10px 88px 0px rgba(0,0,0,0.75)',
                MozBoxShadow: '10px 10px 88px 0px rgba(0,0,0,0.75)',
                boxShadow: '10px 10px 88px 0px rgba(0,0,0,0.75)',
              }}
            />
          </div>
        ))}
      </div>
      <div className='flex w-full justify-center gap-2 py-2'>
        <a href='#item1' className='btn btn-xs'>
          1
        </a>
        <a href='#item2' className='btn btn-xs'>
          2
        </a>
        <a href='#item3' className='btn btn-xs'>
          3
        </a>
        <a href='#item4' className='btn btn-xs'>
          4
        </a>
      </div>
    </div>
  )
}

export default Carousel
