import React from 'react'
import Image from 'next/image'


const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#3F4A59]'>
            About
          </p>
          <h2 className='py-4'>
            Who I Am
          </h2>
          <p className='py-2 text-gray-600'>
            I have spent the last 6 years in the construction industry as a general contractor. I have always had a knack for technology and working with computers. In 2022 I attended a coding bootcamp following a fullstack C#/React Web and Mobile Development course.
          </p>
          <p className='py-2 text-gray-600'>
            Since graduating I have been interning at Opine School furthering my learning. I have a lot to experience but I'm looking forward to the next couple years. I'm excited to be able to continue to grow and discover new languages and skills.
          </p>
          <a href='/#projects'><p className='py-2 text-gray-600 underline cursor-pointer'> Check out some of my latest projects.</p></a>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <img className='rounded-xl' src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80" alt='/'></img>
          {/* <Image 
          src="/../public/assets/aboutPhoto.png" 
          alt="/"
          width='60'
          height='50'
          /> */}
        </div>
      </div>
    </div>
  )
}

export default About