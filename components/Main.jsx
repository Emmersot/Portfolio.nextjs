import Link from 'next/link'
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const Main = () => {
  return (
    <div id='home' className='w-full md:h-screen text-center '>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center py-10'>
        <div>
          <h1 className='py-4 text-gray-700'>
            Hi, I&apos;m <span className='text-[#64B5B0]'>Tyler</span>
          </h1>
          <h1 className='py-2 text-gray-700'>
            A Full-Stack Software Engineer
          </h1>
          <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
          Currently, I&apos;m focused on building front-end web applications while learning back-end technologies. I have a certification in mobile and web development after an 8 month bootcamp. I'm currently working on a AWS cloud practitioner certification with a larger goal of becoming a certified solutions architect. 
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              href='https://www.linkedin.com/in/tyler-emmerson/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href='https://github.com/emmersot'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
              </div>
            </a>
            <Link href='/#contact'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail />
              </div>
            </Link>
            <Link href='/resume'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main