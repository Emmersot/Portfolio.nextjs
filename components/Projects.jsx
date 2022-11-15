import React from 'react'
import propertyImg from '../public/assets/projects/Property.png'
import exchangeImg from '../public/assets/projects/Exchange.png'
import ProjectItem from './ProjectItem'

const Projects = () => {
  return (
    <div id='projects' className='w-full h-screen'>
      <div className='max-w-[1240px] w-full h-screen mx-auto px-2 py-24'>
        <p className='text-xl tracking-widest uppercase text-[#3F4A59]'>
          Projects
        </p>
        <h2 className='py-4'>What I've Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>

          <ProjectItem
            title='Property Management'
            tech='React JS'
            backgroundImg={propertyImg} 
            projectUrl='/property'
          />
          <ProjectItem
            title='Currency Exchanger'
            tech='Node JS' 
            backgroundImg={exchangeImg} 
            projectUrl='/exchange'
          />
          <ProjectItem
            title='Currency Exchanger'
            tech='React JS' 
            backgroundImg={exchangeImg} 
            projectUrl='/exchange'
          />
          <ProjectItem
            title='Currency Exchanger'
            tech='React JS' 
            backgroundImg={exchangeImg} 
            projectUrl='/exchange'
          />
        </div>
      </div>
    </div>
  )
}

export default Projects