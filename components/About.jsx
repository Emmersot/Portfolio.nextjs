import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import aboutImg from '../public/assets/images/aboutPhoto.png'


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
            At present, I'm an IT technician for the e-commerce store Made In Oregon. With over 200 workers ranging from retail employees to shipping globally, I've been able to manage all levels of hardware, software, and network issues. I've led multiple projects in both IT work and software development while following a current passion for more network and cloud based applications. 
          </p>
          <p className='py-2 text-gray-600'>
            During my time with Opine School, I gained hands-on experience coding under direction of a team, collaborating on software projects, and testing systems applications. Some of my accomplishments include developing a method to connect a cloud database to an automated emailing platform. More recently I have had the opportunity to lead the migration from RetailPro point of sale system to Shopify, rebuilding the warehouse stock and employee databases. As well as being contracted by A Billion Trees as the lead engineer creating the initial version of the e-commerce site.
          </p>
          <Link href='/#projects'><p className='py-2 text-gray-600 underline cursor-pointer'> Check out some of my latest projects.</p></Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          {/* <img className='rounded-xl' src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80" alt='/'></img> */}
          <Image 
          src={aboutImg} 
          alt="/"
          />
        </div>
      </div>
    </div>
  )
}

export default About
