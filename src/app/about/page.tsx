import React from 'react'
import '../css_files/about.css';
import Image from 'next/image';
import Link from 'next/link';

const About = () => {
  return (
    <main>
        <div className='heading'>
              <h1 className='about-h1'>About Us</h1>
              <p>Discover a world where elegance meets precision, and every watch tells a story of timeless style</p>
        </div>
        <div className="container">
            <section className='about'>
                <div className="about-image">
                  <Image src="/images/b-w.jpg" alt='about-img' width={450} height={450} className='image'/>
                </div>
                <div className="about-content">
                    <h2 className='about-h2'>Embrace Time, Embrace Style</h2>
                    <p>At Oclock, we believe a watch is more than a timepiece; its 
                      a reflection of your style. Passionate about horology, we curate
                      a diverse selection of exquisite watches, ensuring quality craftsmanship
                      and timeless design. Whether you are looking for a classic, a modern 
                      accessory, or a perfect gift, Oclock is your destination. We are dedicated
                      to providing an exceptional shopping experience with reliable customer 
                      service. Discover the perfect watch that accompanies you through every moment of life.</p>
                      <Link href="" className='read-more'>Read More</Link>
                </div>

            </section>
        </div>

    </main>
  )
}

export default About