import Image from 'next/image'
import Link from 'next/link'
import React, {useState, useEffect} from 'react'
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs' 
// import NavLogo from "../public/assets/navLogo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#ecf0f3');
  const [linkColor, setLinkColor] = useState('#1f2937');

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(()=> {
    const handleShadow = () => {
      if(window.scrollY >= 90) {
        setShadow(true)
      } else {
        setShadow(false)
      }
    }
    window.addEventListener('scroll', handleShadow);
  },[])

  return (
    <div 
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow 
        ? 'fixed w-full h-20 shadow-xl z-[100]' 
        : 'fixed w-full h-20 z-[100]'
      }
    >
      <div className='flex justify-center items-center w-full h-full px-2 2xl:px-16'>
        <div>
          <ul style={{ color: `${linkColor}` }} className='hidden md:flex scroll-smooth' >
            <li className='ml-10 text-sm uppercase scroll-smooth'>
              <Link href='/'>Home</Link>
            </li>
            <li className='ml-10 text-sm uppercase scroll-smooth'>
              <Link href='/#about'>About</Link>
            </li>
            <li className='ml-10 text-sm uppercase'>
              <Link href='/#skills'>Skills</Link>
            </li>
            <li className='ml-10 text-sm uppercase'>
              <Link href='/#projects'>Projects</Link>
            </li>
            <li className='ml-10 text-sm uppercase'>
              <Link href='/resume'>Resume</Link>
            </li>
            <li className='ml-10 text-sm uppercase'>
              <Link href='/#contact'>Contact</Link>
            </li>
          </ul>
          {/* Hamburger Icon */}
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav} 
            className='md:hidden cursor-pointer absolute right-12 h-16'
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div 
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
        }
      >
        {/* Side Drawer Menu */}
        <div 
          className={
            nav 
              ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-6 ease-in duration-500' 
              : 'fixed left-[-100%] top-0 p-6 ease-in duration-500'
          }
        >
          <div>
            <div className='flex w-full items-center justify-between'>
              <div 
                onClick={handleNav} 
                className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className='border-b border-gray-300 my-4'>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              <Link href='/'>
                <li onClick={()=> setNav(false)} className='py-4 text-sm'>
                  Home
                </li>
              </Link>
              <Link href='/#about'>
                <li onClick={()=> setNav(false)} className='py-4 text-sm'>
                  About
                </li>
              </Link>
              <Link href='/#skills'>
                <li onClick={()=> setNav(false)} className='py-4 text-sm'>
                  Skills
                </li>
              </Link>
              <Link href='/#projects'>
                <li onClick={()=> setNav(false)} className='py-4 text-sm'>
                  Projects
                </li>
              </Link>
              <Link href='/resume'>
                <li onClick={()=> setNav(false)} className='py-4 text-sm'>
                  Resume
                </li>
              </Link>
              <Link href='/#contact'>
                <li onClick={()=> setNav(false)} className='py-4 text-sm'>
                  Contact
                </li>
              </Link>
            </ul>
            <div className='pt-40'>
              <p className='uppercase tracking-widest text-[#64B5B0]'>
                Let&apos;s Connect
              </p>
                <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                  <a
                    href='https://www.linkedin.com/in/tyler-emmerson/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div 
                      onClick={() => setNav(!nav)} 
                      className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                    >
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a
                    href='https://github.com/emmersot'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div 
                      onClick={() => setNav(!nav)} 
                      className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                    >
                      <FaGithub />
                    </div>
                  </a>
                  <Link href='#contact'>
                    <div 
                      onClick={() => setNav(!nav)} 
                      className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                    >
                      <AiOutlineMail />
                    </div>
                  </Link>
                  <Link href='/resume'>
                  <div 
                    onClick={() => setNav(!nav)} 
                    className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                  >
                    <BsFillPersonLinesFill />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar