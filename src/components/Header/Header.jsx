import React from 'react'
import logo from '../../img/header/Logo.png'

const Header = () => {
  return (
    <header className='py-6'>
      <div className='my-0 mx-auto max-w-screen-lg'>
        <div className='flex justify-between items-center'>

          <div>
            <img src={logo} />
          </div>

          <div className='flex gap-3'>
            <button className="w-[100px] h-[34px] rounded-[80px] bg-primary hover:bg-hover">Users</button>
            <button className="w-[100px] h-[34px] rounded-[80px] bg-primary hover:bg-hover">Sign Up</button>
          </div>
        </div>
      </div>
    </header>
    
  )
}

export default Header