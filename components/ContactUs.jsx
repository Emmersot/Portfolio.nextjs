import Link from 'next/link'
import React, { useRef } from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'
import emailjs from '@emailjs/browser';
import { useState } from 'react';

export const ContactUs = () => {
  const form = useRef();
  const [name , setName] = useState('');
  const [email , setEmail] = useState('');
  const [phone , setPhone] = useState('');
  const [subject , setSubject] = useState('');
  const [message , setMessage] = useState('');

  const sendEmail = (e) => {
    event.preventDefault();

    setName('');
    setEmail('');
    setPhone('');
    setSubject('');
    setMessage('');

    emailjs
      .sendForm(
        'service_ccrsemh', 
        'template_xgcb1zy', 
        form.current, 
        'pNfMS--oE6NpfAIpO'
      )
      .then(
        (result) => {
          console.log(result.text);
        }, 
        (error) => {
          console.log(error.text);
        });
      };

  return (
    <div id='contact' className='w-full lg:h-screen'>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
      <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Contact</p>
      <h2 className='py-4'>Get In Touch</h2>
      <div className='grid lg:grid-cols-5 gap-8'>
{/* left */}
    <div className='col-span lg:col-span-2 w-full height-full shadow-xl shadow-gray-400 rounded-xl p-4 '>
      <div className='lg:p-4 h-full'>
        <div>
          <img
            className='rounded-xl' 
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80" 
            alt="/" >
          </img>
        </div>
        <div>
          <h2 className='py-2'>Tyler Emmerson</h2>
          <p>Software Engineer</p>
          <p className='py-4'>I am available for full-time positions. Contact me and let's talk.</p>
        </div>
      <div>
        <p className='uppercase pt-8'>Connect With Me</p>
        <div className='flex items-center justify-between py-4'>
        <a
                  href='https://www.linkedin.com/in/tyler-emmerson/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href='https://github.com/emmersot'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaGithub />
                  </div>
                </a>
            <Link href='#contact'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail/>
              </div>
            </Link>
            <Link href='/resume'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsFillPersonLinesFill/>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
{/* right */}
        <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
          <div className='p-4'>
            <form ref={form} onSubmit={sendEmail}>
              <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                <div className='flex flex-col'>
                  <label className='uppercase text-sm py-2'>Name</label>
                  <input 
                    className='border-2 rounded-xl p-3 flex border-gray-300' 
                    type="text"
                    name="user_name"
                    placeholder='Enter your name'
                    onChange={
                      event => setName(event.target.value)}
                    value={name}
                  />
                </div>
                <div className='flex flex-col'>
                  <label className='uppercase text-sm py-2'>Phone Number</label>
                  <input 
                    className='border-2 rounded-xl p-3 flex border-gray-300' 
                    type='text'
                    name="phone_number"
                    placeholder='Enter your phone number'
                    onChange={
                      event => setPhone(event.target.value)}
                    value={phone}
                  />
                    </div>
                  </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Email</label>
                  <input 
                    className='border-2 rounded-xl p-3 flex border-gray-300' 
                    type='text'
                    name="user_email"
                    placeholder='Enter your email'
                    onChange={
                      event => setEmail(event.target.value)}
                    value={email}
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Subject</label>
                  <input 
                    className='border-2 rounded-xl p-3 flex border-gray-300' 
                    type='text'
                    name="subject"
                    placeholder='Enter your subject'
                    onChange={
                      event => setSubject(event.target.value)}
                    value={subject}
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Message</label>
                  <textarea 
                    className='border-2 rounded-xl p-3 border-gray-300' 
                    rows='10'
                    name="message"
                    placeholder='Message here'
                    onChange={
                      event => setMessage(event.target.value)}
                    value={message}
                    ></textarea>
                </div>
                <button className='w-full p-4 text-gray-100 mt-4'>Send Message</button>
              </form>
            </div>
          </div>
        </div>
        <div className='flex justify-center py-12'>
          <Link href='/'>
            <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
              <HiOutlineChevronDoubleUp className='text-[#5651e5] size={30} '/>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ContactUs