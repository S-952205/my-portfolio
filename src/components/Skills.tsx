import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
      <div className='grid md:grid-cols-2 gaps-20 items-center'>
        <div data-aos="zoom-in-up">
          <h1  className='text-4xl md:text-5xl' data-aos="zoom-in-up">Tech Knowledge Areas</h1>
        <p className='text-gray-500 pt-8'> Web Development: With a strong foundation in HTML and CSS, I have built an understanding of the essential front-end technologies that bring websites to life. I am currently expanding my skill set with Tailwind CSS to efficiently style responsive designs and with Next.js, which allows me to create fast, SEO-friendly, and scalable web applications with server-side rendering.
        Backend and Database Management: My journey in web development began with C# and .NET Core for backend development, where I learned to build structured applications and connect them to a database using SQL. Additionally, my experience with ASP.NET MVC has provided me with a solid grasp of the Model-View-Controller architecture, allowing me to organize applications into logical components that enhance code readability and maintainability.
        </p>
        </div>
        <div>
          <div className='grid grid-cols-2 text-accent text-3xl sm:text-4xl'>
           <div className='space-y-2'>
           <h2 data-aos="zoom-in-up">Tailwind CSS</h2>
           <h2 data-aos="zoom-in-up">Next JS</h2>
           <h2 data-aos="zoom-in-up">React</h2>
           <h2 data-aos="zoom-in-up">CSS</h2>
           </div>
           <div className='space-y-2'>
           <h2 data-aos="zoom-in-up">C#</h2>
           <h2 data-aos="zoom-in-up">GITHUB</h2>
           <h2 data-aos="zoom-in-up">GIT</h2>
           <h2 data-aos="zoom-in-up">SQL</h2>
           </div>


          </div>
          
        </div>
        
        </div>
      </div>
  )
}

export default Skills
