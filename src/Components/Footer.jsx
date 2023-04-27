import React from 'react'

function Footer() {
  return (
    <div>    
      <div className='mt-4 container mx-auto flex justify-center'>
        <a href="https://www.linkedin.com/in/talha-bayyar-12a2b7200/" target='blank' className='mr-2'><i className="fa-brands fa-linkedin"></i></a>  
        <a href="https://github.com/TalhaBayyar" target='blank'><i className="fa-brands fa-github"></i></a>
      </div>
      <div className='mt-4 container mx-auto flex justify-center'>
        <i className="fa-sharp fa-regular fa-copyright mt-[3px]"></i>
        <span className='font-bold'>2023 Copyright Talha Bayyar</span>
      </div>
    </div>
  )
}

export default Footer