import React from 'react'
import 'animate.css'
function Students() {
  const Activities = [
    {
      name: 'Music',
      image:
        'https://media.istockphoto.com/id/1142649448/photo/gen-z-girl-enjoying-disco-music.webp?b=1&s=170667a&w=0&k=20&c=087tA-sZCkcHpQAUkaWrB2VS2Ri_8qFzdZOxKL3mcZQ=', // Add image URL here
      desc: 'Explore the world of music through instruments and vocals.',
    },
    {
      name: 'Dance',
      image:
        'https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFuY2V8ZW58MHx8MHx8fDA%3D', // Add image URL here
      desc: 'Express yourself through various styles of dance.',
    },
    {
      name: 'Drama',
      image:
        'https://media.istockphoto.com/id/1003275828/photo/theater-masks-on-a-dark-background-3d-rendering.webp?b=1&s=170667a&w=0&k=20&c=q27aEnw3ayF01WxrbFmsk2Z-0Y5A3pOrq2rsj24DxOs=', // Add image URL here
      desc: 'Engage in acting and theater production.',
    },
    {
      name: 'Art',
      image:
        'https://media.istockphoto.com/id/2148263539/photo/artist-woman-doing-water-color-painting-on-canvas-in-leisure-time-at-home.webp?b=1&s=170667a&w=0&k=20&c=UPqPObc7EURif7I5O4F1LkWSi0DUs2HEDZEVqR6TQNo=', // Add image URL here
      desc: 'Unleash your creativity through painting, drawing, and more.',
    },
    {
      name: 'Sports',
      image:
        'https://plus.unsplash.com/premium_photo-1685303469251-4ee0ea014bb3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3BvcnRzfGVufDB8fDB8fHww', // Add image URL here
      desc: 'Participate in team and individual sports activities.',
    },
    {
      name: 'Robotics',
      image:
        'https://plus.unsplash.com/premium_photo-1663075913794-6c742d7d6c74?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHJvYm90aWNzfGVufDB8fDB8fHww', // Add image URL here
      desc: 'Design and build robots, and explore STEM concepts.',
    },
    {
      name: 'Debate Club',
      image:
        'https://media.istockphoto.com/id/1477155186/photo/cheerful-girl-student-discussing-learning-assignment-with-coursemates.webp?b=1&s=170667a&w=0&k=20&c=RWPCS3SEyoghnBOzmjb5mQd0g_dSKD2ZVWVlc3nozYc=', // Add image URL here
      desc: 'Develop your public speaking and argumentation skills.',
    },
    {
      name: 'Science Club',
      image:
        'https://media.istockphoto.com/id/502607698/photo/happy-young-female-botanist-collecting-sample-of-leafs-in-nature.webp?b=1&s=170667a&w=0&k=20&c=vOZASeii9-IAcEbG4LM1_kNSJVvpySpQdinThqVN-6Y=', // Add image URL here
      desc: 'Dive into experiments and scientific discussions.',
    },
  ]
  const ClubsAndSocieties = [
    {
      name: 'Literary Society',
      image:
        'https://images.unsplash.com/photo-1518373714866-3f1478910cc0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TGl0ZXJhcnl8ZW58MHx8MHx8fDA%3D', // Add image URL here
      desc: 'Engage in discussions and activities centered around literature and creative writing.',
    },
    {
      name: 'Environmental Club',
      image:
        'https://media.istockphoto.com/id/1181043800/photo/people-with-placards-and-posters-on-global-strike-for-climate-change.webp?b=1&s=170667a&w=0&k=20&c=Mg8S2hBP03Y-NEhyRaiPGxQbgdPPOaiK-EHlSdZI73w=', // Add image URL here
      desc: 'Promote sustainability and environmental awareness through projects and initiatives.',
    },
    {
      name: 'Astronomy Club',
      image:
        'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXN0cm9ub215fGVufDB8fDB8fHww', // Add image URL here
      desc: 'Explore the wonders of the universe and learn about astronomy and space science.',
    },
    {
      name: 'Coding Club',
      image:
        'https://images.unsplash.com/photo-1607706189992-eae578626c86?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29kaW5nfGVufDB8fDB8fHww', // Add image URL here
      desc: 'Develop programming skills and work on coding projects and challenges.',
    },
  ]

  const Achievements = [
    {
      name: 'John Smith',
      image:
        'https://media.istockphoto.com/id/1489208986/photo/young-indonesian-man-celebrate-indonesia-independence-day-17-august.webp?b=1&s=170667a&w=0&k=20&c=S9jhvOrqQUoHb5_PiOyqjepiFk74jP1qSebVH-NFOVI=', // Add image URL here
      desc: 'National Level Math Olympiad Winner',
    },
    {
      name: 'Sarah Lee',
      image:
        'https://media.istockphoto.com/id/184324388/photo/young-swimmer-with-a-medal.webp?b=1&s=170667a&w=0&k=20&c=VbszDT4YujJ_bqBnKM94sE3oxuzwGnzy1mjzZKjbNXM=', // Add image URL here
      desc: 'Gold Medalist in State Swimming Championship',
    },
    {
      name: 'Tech Innovators Club',
      image:
        'https://media.istockphoto.com/id/1076614088/photo/schoolchildren-joying-and-raising-hands-at-desk-in-stem-education-class.webp?b=1&s=170667a&w=0&k=20&c=LR2It3dd-ovDWcS7b5RcWMZ50zm9YLjhQkG0V_zbHqA=', // Add image URL here
      desc: 'Winners of Inter-School Robotics Competition',
    },
  ]
  const Students = [
    {
      name: 'Amy Parker',
      grade: 'Grade 12',
      position: 'President',
    },
    {
      name: 'Rajiv Mehta',
      grade: 'Grade 11',
      position: 'Vice President',
    },
    {
      name: 'Lisa Wong',
      grade: 'Grade 10',
      position: 'Secretary',
    },
  ]

  return (
    <div className='mb-20'>
      <div className='flex justify-center items-center md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-4xl text-2xl'>
        <h3 className='my-10 animate__animated animate__backInDown'>
          Extracurricular Activities
        </h3>
      </div>
      <div className='activities flex flex-wrap justify-center items-center'>
        {/* insert shadow for following card */}
        {Activities.map((act) => (
          <div
            className='card bg-base-100 w-96 shadow-xl mx-5 my-5 animate__animated animate__heartBeat'
            style={{
              WebkitBoxShadow: '10px 10px 88px 0px rgba(0,0,0,0.75)',
              MozBoxShadow: '10px 10px 88px 0px rgba(0,0,0,0.75)',
              boxShadow: '10px 10px 88px 0px rgba(0,0,0,0.75)',
            }}
          >
            <div className='card-body'>
              <h2 className='card-title'>{act.name}</h2>
              <p>{act.desc}</p>
            </div>
            <figure>
              <img
                src={act.image}
                alt='Shoes'
                className='h-52 rounded-lg pb-4 '
              />
            </figure>
          </div>
        ))}
      </div>
      <div className='flex justify-center items-center md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-4xl text-2xl'>
        <h3 className='my-20'>Clubs and Societies</h3>
      </div>
      <div className='activities flex flex-wrap justify-center items-center'>
        {/* insert shadow for following card */}
        {ClubsAndSocieties.map((act) => (
          <div
            className='card bg-base-100 w-96 shadow-xl mx-5 my-5 animate__animated animate__heartBeat'
            style={{
              WebkitBoxShadow: '10px 10px 88px 0px rgba(0,0,0,0.75)',
              MozBoxShadow: '10px 10px 88px 0px rgba(0,0,0,0.75)',
              boxShadow: '10px 10px 88px 0px rgba(0,0,0,0.75)',
            }}
          >
            <div className='card-body'>
              <h2 className='card-title'>{act.name}</h2>
              <p>{act.desc}</p>
            </div>
            <figure>
              <img
                src={act.image}
                alt='Shoes'
                className='h-52 rounded-lg pb-4'
              />
            </figure>
          </div>
        ))}
      </div>
      <div className='flex justify-center items-center md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-4xl text-2xl'>
        <h3 className='my-20'>Achievements</h3>
      </div>
      <div className='activities flex flex-wrap justify-center items-center'>
        <div>
          {Achievements.map((act) => (
            <div
              className='card bg-base-100 w-96 shadow-xl mx-5 my-6 animate__animated animate__heartBeat'
              style={{
                WebkitBoxShadow: '10px 10px 88px 0px rgba(0,0,0,0.75)',
                MozBoxShadow: '10px 10px 88px 0px rgba(0,0,0,0.75)',
                boxShadow: '10px 10px 88px 0px rgba(0,0,0,0.75)',
              }}
            >
              <div className='card-body'>
                <h2 className='card-title'>{act.name}</h2>
                <p>{act.desc}</p>
              </div>
              <figure>
                <img
                  src={act.image}
                  alt='Shoes'
                  className='h-52 rounded-lg pb-4'
                  loading='lazy'
                />
              </figure>
            </div>
          ))}
        </div>
      </div>
      <div className='flex justify-center items-center md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-4xl text-2xl'>
        <h3 className='my-20'>Student Council</h3>
      </div>
      <div className='flex flex-wrap justify-center items-center'>
        {Students.map((student) => (
          <div
            className='card bg-base-100 w-96 shadow-xl mx-5 mb-5 animate__animated animate__heartBeat'
            style={{
              WebkitBoxShadow: '10px 10px 88px 0px rgba(0,0,0,0.75)',
              MozBoxShadow: '10px 10px 88px 0px rgba(0,0,0,0.75)',
              boxShadow: '10px 10px 88px 0px rgba(0,0,0,0.75)',
            }}
          >
            <div className='card-body items-center text-center'>
              <h2 className='card-title'>
                {student.name} ({student.position})
              </h2>
              <p>{student.grade}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Students
