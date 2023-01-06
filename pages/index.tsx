import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Link from 'next/link'


function index() {
  return (
    <div>
      {/* Header Component*/}
      <Header />

      <div id="main ">
        <div className='pt-20 sm:pt-15 md:pt-10 md:mt-8'>
        <h1 className="jt__text md:pl-20 text-2xl mt-20 md:ml-20 md:text-4xl text-slate-400 heading font-bold">&nbsp;&nbsp;&nbsp;UNLOCK THE POWER OF</h1>
        <h1 className="jt__text md:pl-20 ml-4 text-2xl mt-4 md:ml-20 md:text-4xl text-slate-400 heading font-bold">&nbsp;&nbsp;&nbsp;&nbsp;<span className='text-green-400  flicker'>WEB3</span> STREAMING</h1>
        </div>
        <h1 className="jt__text pl-4 md:svg-text md:pl-20 ml-5 text-4xl mt-4 md:ml-20 md:text-7xl text-white heading font-bold"><link href="https://fonts.googleapis.com/css?family=Russo+One" rel="stylesheet" />
        C<span className='text-green-400 flicker'>O</span>MING S<span className='text-green-400 flicker'>OO</span>N!!</h1>
        <hr className='hidden md:hr my-4 md:mr-20 h-1 w-60 mt-5'></hr>

        <h1 className="jt__text pl-3 md:pl-20 text-2xl mt-5 md:ml-20 md:text-4xl text-slate-400 font-bold heading">&nbsp;&nbsp;&nbsp;<span className='text-green-400 flicker'>A</span>NYWHERE - <span className='text-green-400 flicker'>A</span>NYTIME</h1>
      <div className='jt__text text-white text-xl text-center mt-10 flicker border-4 border-green-300 mx-20 rounded-2xl md:hidden'>
        <button className='button'><Link href="about">Learn More</Link></button>

      </div>
      <div className='jt__text pt-10 social'>
      <Footer />
      </div>
      
      </div>
    </div>
  )
}

export default index