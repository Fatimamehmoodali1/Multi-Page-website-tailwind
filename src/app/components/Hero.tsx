
import React from 'react'
import Image from 'next/image'
import '../css_files/hero.css'

const Hero = () => {
  return (
    <section className='hero-sec'>
             <div className='image-container'>
                <Image src="/images/omega blue.png" alt='hero-image' width={500} height={650} className='hero-image'/>
             </div>
             <div className='content'>
                 <h1 className='heading-h1'>Pure Luxury</h1>
                 <h2 className='product_name'>Blue Omega SA</h2>
                 <p className='pricing'>&#36;3,879</p>
                 <div className='btn-container'>
                    <button className='primary-btn'>Discover</button>
                    <button className='secondary-btn'>Add to Cart</button>
                 </div>
             </div>
    </section>
  )
}

export default Hero
