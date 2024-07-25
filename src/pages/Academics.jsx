import React from 'react'

function Academics() {
  return (
    <div className='flex flex-col gap-10 my-6 mb-20'>
      <div className='text-5xl text-center mx-10 my-7'>
        We use a blend of traditional and modern teaching techniques to cater to
        different learning styles.
      </div>
      <div className='text-xl text-center mx-10'>
        Digital classrooms, interactive learning modules, and access to online
        educational platforms.
      </div>
      <div>
        <div className='flex items-center justify-center'>
          <div class=' rounded overflow-hidden shadow-lg'>
            <div class='px-6 py-4'>
              <div class='font-bold text-xl mb-2 text-center'>
                Primary (Grades 1-5)
              </div>
              <p class='text-gray-700 text-base flex gap-2 flex-wrap items-center justify-center'>
                <div className='badge badge-accent'>English</div>
                <div className='badge badge-accent'>Mathematics</div>
                <div className='badge badge-accent'>Science</div>
                <div className='badge badge-accent'>Social Studies</div>
                <div className='badge badge-accent'>Art</div>
                <div className='badge badge-accent'>Physical Education</div>
              </p>
            </div>
          </div>
        </div>
        <div className='flex items-center justify-center'>
          <div class=' rounded overflow-hidden shadow-lg'>
            <div class='px-6 py-4'>
              <div class='font-bold text-xl mb-2 text-center'>
                Secondary (Grades 6-10)
              </div>
              <p class='text-gray-700 text-base flex gap-2 flex-wrap items-center justify-center'>
                <div className='badge badge-primary'>English</div>
                <div className='badge badge-primary'>Mathematics</div>
                <div className='badge badge-primary'>
                  Science (Physics, Chemistry, Biology)
                </div>
                <div className='badge badge-primary'>Social Studies</div>
                <div className='badge badge-primary'>Computer Science</div>
                <div className='badge badge-primary'>Physical Education</div>
                <div className='badge badge-primary'>Art</div>
              </p>
            </div>
          </div>
        </div>
        <div className='flex items-center justify-center'>
          <div class=' rounded overflow-hidden shadow-lg'>
            <div class='px-6 py-4'>
              <div class='font-bold text-xl mb-2 text-center'>
                Senior Secondary (Grades 11-12) : Science
              </div>
              <p class='text-gray-700 text-base flex gap-2 flex-wrap items-center justify-center'>
                <div className='badge badge-neutral'>Physics</div>
                <div className='badge badge-neutral'>Chemistry</div>
                <div className='badge badge-neutral'>Biology</div>
                <div className='badge badge-neutral'>Mathematics</div>
                <div className='badge badge-neutral'>Computer Science</div>
                <div className='badge badge-neutral'>English</div>
              </p>
            </div>
          </div>
        </div>
        <div className='flex items-center justify-center'>
          <div class=' rounded overflow-hidden shadow-lg'>
            <div class='px-6 py-4'>
              <div class='font-bold text-xl mb-2 text-center'>
                Senior Secondary (Grades 11-12) : Commerce
              </div>
              <p class='text-gray-700 text-base flex gap-2 flex-wrap items-center justify-center'>
                <div className='badge badge-ghost'>Accountancy</div>
                <div className='badge badge-ghost'>Business Studies</div>
                <div className='badge badge-ghost'>Economics</div>
                <div className='badge badge-ghost'>Mathematics</div>
                <div className='badge badge-ghost'>English</div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Academics
