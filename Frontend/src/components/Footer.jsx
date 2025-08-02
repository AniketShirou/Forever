import React from 'react'
import { assets } from '../assets/frontend_assets/assets'
import { Link, NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
            <img src={assets.logo} className='mb-5 w-32' />
            <p className='b w-full md:w-2/3 text-gray-600'>
               Experience unmatched quality and style with our latest product. Thoughtfully designed for everyday use, it combines comfort, durability, and modern aesthetics to elevate your lifestyle
            </p>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
               <NavLink to="/" className={({ isActive }) => isActive ? 'text-black font-medium' : 'text-gray-600 hover:text-black'}> HOME </NavLink>
               <NavLink to="/collection" className={({ isActive }) => isActive ? 'text-black font-medium' : 'text-gray-600 hover:text-black'}> COLLECTION </NavLink>
               <NavLink to="/about" className={({ isActive }) => isActive ? 'text-black font-medium' : 'text-gray-600 hover:text-black'}> ABOUT </NavLink>
               <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-black font-medium' : 'text-gray-600 hover:text-black'}> CONTACT </NavLink>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+91-123-4567-890</li>
                <li>conatct@forever.com</li>
            </ul>
        </div>
    </div>

      <div>
        <hr/>
        <p className="py-5 text-sm text-center">
          &copy; 2025 forever.com – All Rights Reserved
        </p>
      </div>

    </div>
  )
}

export default Footer