import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'

function about() {
  return (
    <div>
      <Header />
       
      <div>
        <h1 className='text-white text-2xl md:text-4xl font-bold pt-20 pb-10 text-center title'>
          About Us
        </h1>
        <div id="main">
          
       
        <h3 className='jt__text text-xl text-green-500 text-bold md:text-5xl text-center md:mx-20 md:pr-20 mt-10 about'>"Unlock the power of Web3 streaming - Anywhere, Anytime"</h3><br></br><br></br>
        <p className='text-white text-center mx-4 md:text-3xl md:mx-20 md:pr-20 mt-1'>
3Ming will be a web3 games streaming platform. Where we will allow peoples to stream web3 games on our streaming platform.
3MING will help People, Creators and Brands to establish there presence in web3 gaming community and build there own virtual gaming communities.
        </p>
    </div>
   </div>
   <div className='ml-20 md:ml-10 mt-10'>
    <Footer />
   </div>
  </div>
  )
}

export default about