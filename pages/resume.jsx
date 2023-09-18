import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Image from 'next/image'
import transcriptImg from '../public/assets/images/transcript.png'


const resume = () => {
  return (
    <>
      <Head>
        <title>Tyler | Resume</title>
        <meta
          name='description'
          content="I'm a graduate from an engineering bootcamp. Currently, I'm focused on building responsive front-end web applications while learning back-end technologies."
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
      <p className='text-xl tracking-widest uppercase text-[#3F4A59]'>Resume</p>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Tyler Emmerson</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/tyler-emmerson/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/emmersot'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Self Driven Learner <span className='px-1'>|</span> Software Engineer{' '}
              <span className='px-1'>|</span>Problem Solver
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Self Driven Learner</p>
            <p className='py-2'>Software Engineer</p>
            <p>Problem Solver</p>
          </div>
        </div>
        <p>
          Analytical, innovative, and motivated web development engineer
          with experience in customer service, team leadership, and
          multi-tasking effectiveness in fast-paced and challenging
          environments. Diverse analytical skills, team collaboration, and
          relationship building. Motivated leader,
          with solid interpersonal abilities and complex problem-solving skills.
          Effective and proven track record of critical thinking, idea
          generation, and optimizing efficiencies.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span>HTML
            <span className='px-2'>|</span>CSS
            <span className='px-2'>|</span>Javascript
            <span className='px-2'>|</span>React
            <span className='px-2'>|</span>AWS
            <span className='px-2'>|</span>C#
            <span className='px-2'>|</span>MySQL
            <span className='px-2'>|</span>Node
            <span className='px-2'>|</span>Docker
            <span className='px-2'>|</span>REST API
            <span className='px-2'>|</span>Dot.Net
          </p>
          <p className='py-2'>
            <span className='font-bold'>Amazon Web Services</span>
            <span className='px-2'>|</span>Studying AWS Certified Cloud Practitioner
            
          </p>
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Professional Experience
        </h5>
        {/* Experience */}

        {/* Made In Oregon */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>Made In Oregon</span>
            <span className='px-2'>|</span>Portland, OR
          </p>
          <p className='py-1 italic'>IT Technician (June - Current)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Enforced secure data transfer protocols and encryption mechanisms and ensured user data remained protected
            </li>
            <li>
              Led the migration from RetailPro POS system to Shopify, rebuilding the stock and employee databases
            </li>
            <li>
              Teamed up with current clients to understand needs for improved functionality, and communicated with engineers and clients to develop enhancements to boost client satisfaction
            </li>
            <li>
              Onboarded and managed privileged accounts across network environment through IAM technologies
            </li>
          </ul>
        </div>
        {/* A Billion Trees */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>A Billion Trees</span>
            <span className='px-2'>|</span>Portland, OR
          </p>
          <p className='py-1 italic'>Software Engineer (Feb-July 2023)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            Contracted as a lead design engineer for the initial version of an e-commerce site leveraging both custom React/Redux web components as well as Shopify integration
            </li>
          </ul>
        </div>
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            Opine School
            </span>
            <span className='px-2'>|</span>Remote
          </p>
          <p className='py-1 italic'>Software Engineer (2022 - 2023)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Built custom chat system with JavaScript and React, increasing user engagement by 31% and improving real-time communication capabilities
            </li>
            <li>
              Performed automated and manual tests to ensure the software created by developers is up to date and working properly
            </li>
            <li>
              Assisted the technical and business staff with the design, development, testing, implementation and maintenance of the launch of Opine School
            </li>
          </ul>
        </div>
      </div>
      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <div>
          <Image
          className='rounded-xl group-hover:opacity-10 p-4' 
          src={transcriptImg} 
          alt='/'
          width='940'
          height='290'
          />

        </div>
      </div>
    </>
  );
};

export default resume;