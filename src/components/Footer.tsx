import React from 'react'

const Footer = () => {
  return (
    // <div className='mt-16 py-6 text-center bg-accent'>
    //     © 2024 Syed Sufyan. All rights reserved.
    // </div>
    <div className="mt-16 py-6 text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg">
    <p className="text-xl sm:text-2xl font-semibold">© 2024 Syed Sufyan. All rights reserved.</p>
    <p className="text-sm mt-2">Built with passion and creativity</p>
    <div className="mt-4">
        <a href="https://github.com" className="text-white hover:text-yellow-400 transition-colors duration-300 mx-2">GitHub</a>
        <a href="https://linkedin.com" className="text-white hover:text-blue-400 transition-colors duration-300 mx-2">LinkedIn</a>
        <a href="mailto:syed@example.com" className="text-white hover:text-red-400 transition-colors duration-300 mx-2">Email</a>
    </div>
</div>

  )
}

export default Footer
