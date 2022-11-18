import React from 'react';
import Image from 'next/image';
import htmlImg from '../public/assets/skills/html.png';
import awsImg from '../public/assets/skills/aws.png';
import cssImg from '../public/assets/skills/css.png';
import javascriptImg from '../public/assets/skills/javascript.png';
import reactImg from '../public/assets/skills/react.png';
import tailwindImg from '../public/assets/skills/tailwind.png';
import firebaseImg from '../public/assets/skills/firebase.png';
import sqlImg from '../public/assets/skills/mysql.png';
import muiImg from '../public/assets/skills/mui.png';
import cImg from '../public/assets/skills/c.png';
import nodeImg from '../public/assets/skills/node.png';
import nxtImg from '../public/assets/skills/nextjs.png';
import githubImg from '../public/assets/skills/github1.png';

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#3F4A59]'>
          Skills
        </p>
        <h2 className='py-4'>What I Can Do</h2>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
          {/* HTML */}
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src={htmlImg} 
                  width='64' 
                  height='64' 
                  alt='/' 
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          {/* AWS */}
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src={awsImg} 
                  width='64' 
                  height='64' 
                  alt='/' 
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>AWS</h3>
              </div>
            </div>
          </div>
          {/* Docker */}
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src={htmlImg} 
                  width='64' 
                  height='64' 
                  alt='/' 
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Docker</h3>
              </div>
            </div>
          </div>
          {/* CSS */}
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src={cssImg}
                  width='64' 
                  height='64' 
                  alt='/' 
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          {/* JAVASCRIPT */}
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src={javascriptImg} 
                  width='64' 
                  height='64' 
                  alt='/' 
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>JAVASCRIPT</h3>
              </div>
            </div>
          </div>
          {/* REACT */}
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src={reactImg} 
                  width='64' 
                  height='64' 
                  alt='/' 
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>REACT</h3>
              </div>
            </div>
          </div>
          {/* TAILWIND */}
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src={tailwindImg} 
                  width='64' 
                  height='64' 
                  alt='/' 
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>TAILWIND</h3>
              </div>
            </div>
          </div>
          {/* FIREBASE */}
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src={firebaseImg} 
                  width='64' 
                  height='64' 
                  alt='/' 
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>FIREBASE</h3>
              </div>
            </div>
          </div>
          {/* GITHUB */}
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src={githubImg} 
                  width='64' 
                  height='64' 
                  alt='/' 
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>GITHUB</h3>
              </div>
            </div>
          </div>
          {/* NEXT */}
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src={nxtImg} 
                  width='64' 
                  height='64' 
                  alt='/' 
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>NEXT</h3>
              </div>
            </div>
          </div>
          {/* NODE */}
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src={nodeImg} 
                  width='64' 
                  height='64' 
                  alt='/' 
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>NODE</h3>
              </div>
            </div>
          </div>
          {/* C# */}
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src={cImg} 
                  width='64' 
                  height='64' 
                  alt='/' 
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>C#</h3>
              </div>
            </div>
          </div>
          {/* MUI */}
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src={muiImg} 
                  width='64' 
                  height='64' 
                  alt='/' 
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>MUI</h3>
              </div>
            </div>
          </div>
          {/* MYSQL */}
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src={sqlImg} 
                  width='64' 
                  height='64' 
                  alt='/' 
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>MYSQL</h3>
              </div>
            </div>
          </div> 
        </div>
      </div>
    </div>
  )
}

export default Skills