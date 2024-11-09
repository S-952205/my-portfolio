import React from 'react'
import { SiMinutemailer } from "react-icons/si";
import { BsTelephoneMinus } from "react-icons/bs";

const contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
      <div className='grid md:grid-cols-2 gap-10'>
        <div className='space-y-8'>
          <h2 className='text-5xl' data-aos="zoom-in-up">Reach Out</h2>
          <p className='text-gray-600 text-[18px] pt-2' data-aos="zoom-in-up" >
          Thank you for visiting my portfolio! If you have any questions, ideas, or just want to discuss something interesting, please feel free to get in touch. I’m always open to new conversations and opportunities
          </p>
          <div className='flex gap-3 items-center' data-aos="zoom-in-up">
          <SiMinutemailer size={30}/> syedali@gmail.com
          </div>
          <div className='flex gap-3 items-center' data-aos="zoom-in-up">
          <BsTelephoneMinus size={30}/> +923462952205
          </div>
        </div>
        <div className='space-y-8'>
            <div className='flex flex-col gap-1' data-aos="zoom-in-up">
                <label htmlFor='name'>Name</label>
                <input type="text" className='h-[40px] bg-transparent border border-accent' id='name'/>
            </div>
            <div className='flex flex-col gap-1' data-aos="zoom-in-up">
                <label htmlFor='email'>Email</label>
                <input type="text" className='h-[40px] bg-transparent border border-accent' id='email'/>
            </div>
            <div className='flex flex-col gap-1' data-aos="zoom-in-up">
                <label htmlFor='msg'>Message</label>
                <textarea className='bg-transparent border border-accent' id='msg' rows={8}></textarea>
            </div>
            <button className='bg-accent p-2 px-6 bg-green-700' data-aos="zoom-in-up">Send</button>
        </div>
      </div>
    </div>
  )
}

export default contact
