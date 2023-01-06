import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import logo from '../components/images/logo.png'

function Header() {
  return (
    <nav className="px-2 sm:px-4 py-1">
  <div className="container flex flex-wrap items-center justify-between mx-auto">
    <div className='flex space-x-3 pt-2'>
    <div><Image src={logo} alt="logo" className='image' /></div>
    <div><h6 className= "md:self-center text-2xl md:text-3xl font-bold whitespace-nowrap text-white"><Link href="/">3Ming
    <span>.</span>
    <span>S</span>
    <span>p</span>
    <span>a</span>
    <span>c</span>
    <span>e</span>
    </Link>
    </h6> </div>
    </div>
       
    
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-10 md:mt-0 md:text-sm md:font-medium md:border-0">
        <li>
        <Link href="/" className="block pr-4 text-white rounded text-2xl  hover:underline" aria-current="page"><h2 className='text-slate-300'>Home</h2></Link>
        </li>
        <li>
        <Link href="about" className="block pr-4 text-white rounded text-2xl hover:underline" aria-current="page"><h2 className='text-slate-300'>About Us</h2></Link>
        </li>
      </ul>
    </div>
  </div>
</nav> 
  )
}

export default Header