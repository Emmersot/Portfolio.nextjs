import Image from 'next/image'
import React from 'react'

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
                  src='/../public/assets/skills/html.png' 
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
                  src='/../public/assets/skills/aws.png' 
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
                  src='/../public/assets/skills/docker.png' 
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
                  src='/../public/assets/skills/css.png' 
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
                  src='/../public/assets/skills/javascript.png' 
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
                  src='/../public/assets/skills/react.png' 
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
                  src='/../public/assets/skills/tailwind.png' 
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
                  src='/../public/assets/skills/firebase.png' 
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
                  src='/../public/assets/skills/github1.png' 
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
                  src='/../public/assets/skills/nextjs.png' 
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
                  src='/../public/assets/skills/node.png' 
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
                  src='/../public/assets/skills/c.png' 
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
                  src='/../public/assets/skills/mui.png' 
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
                  src='/../public/assets/skills/mysql.png' 
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