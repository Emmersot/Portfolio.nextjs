import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import propertyImg from '../public/assets/projects/Property.png'
import exchangeImg from '../public/assets/projects/Exchange.png'
import ProjectItem from './ProjectItem'

const Projects = () => {
  return (
    <div className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I've Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>

          <ProjectItem
            title='Property Management' 
            backgroundImg={propertyImg} 
            projectUrl='/property'
          />
          <ProjectItem
            title='Currency Exchanger' 
            backgroundImg={exchangeImg} 
            projectUrl='/exchange'
          />
          <ProjectItem
            title='Currency Exchanger' 
            backgroundImg={exchangeImg} 
            projectUrl='/exchange'
          />
          <ProjectItem
            title='Currency Exchanger' 
            backgroundImg={exchangeImg} 
            projectUrl='/exchange'
          />
        </div>
      </div>
    </div>
  )
}

export default Projects