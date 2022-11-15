import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

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
        <h2 className='text-center'>Resume</h2>
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
            <span className='px-2'>|</span>Web and Mobile Development
            <span className='px-2'>|</span>HTML
            <span className='px-2'>|</span>CSS
            <span className='px-2'>|</span>Javascript
            <span className='px-2'>|</span>React
            <span className='px-2'>|</span>Next JS
            <span className='px-2'>|</span>C#
            <span className='px-2'>|</span>MySQL
            <span className='px-2'>|</span>Node
            <span className='px-2'>|</span>Tailwind
            <span className='px-2'>|</span>Firebase
            <span className='px-2'>|</span>REST API
            <span className='px-2'>|</span>Dot.Net
          </p>
          <p className='py-2'>
            <span className='font-bold'>Amazon Web Services</span>
            <span className='px-2'>|</span>Amazon Web Services Cloud
            Exposure
          </p>
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Professional Experience
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            Opine School Internship
            </span>
            <span className='px-2'>|</span>Remote
          </p>
          <p className='py-1 italic'>Fullstack Software Engineer (2022 - Current)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Ensured comprehensive mobile responsive UI layouts with
              understanding of HTML, CSS, and JavaScript.
            </li>
            <li>
              Troubleshoot issues and concerns, configure operation and analytic
              plugins, and design changes as needed.
            </li>
            <li>
              Worked directly with co-owner to breakdown and
              implement multiple technologies and programs.
            </li>
          </ul>
        </div>

        {/*  */}
        <h5 className='text-center underline text-[18px] py-4'>
          Other Professional Experience
        </h5>
      
        {/* General Contractor */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>Contractors Employment Services</span>
            <span className='px-2'>|</span>Portland, OR
          </p>
          <p className='py-1 italic'>General Contractor (2015 - 2022)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Ability to manage several complex projects simultaneously
            </li>
            <li>
              Collaborated with owners, contractors, and business personnel to ensure
              that projects meet expectations and specifications.
            </li>
            <li>
              Accepted feedback from peers and owners to implement suggestions into later projects.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;