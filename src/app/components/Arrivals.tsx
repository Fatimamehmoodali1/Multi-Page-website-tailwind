import React from 'react'
import '../css_files/arrivals.css';
import Image from 'next/image';

 const Arrivals = () => {
  return (
    <main className='main-arrival-sec'>
        <section className='arrival-sec'>
            <h2 className='arrival-sec-h2'>New Arrivals</h2>
            <div className='card-container'>
                  <div className="card">
                    <Image src="/images/tissot2.png" alt='card-image' width={320} height={320} className='card-image'/>
                    <h2>Tissot</h2>
                    <p className='card-pricing'>&#36;3,988</p>
                    <button className='arrivals-btn'>Discover</button>
                  </div>

                  <div className="card">
                    <Image src="/images/Klassc.png" alt='card-image' width={320} height={320} className='card-image'/>
                    <h2>Klassc</h2>
                    <p className='card-pricing' >&#36;3,988</p>
                    <button className='arrivals-btn'>Discover</button>
                  </div>

                  <div className="card">
                    <Image src="/images/citizen.png" alt='card-image' width={320} height={320} className='card-image'/>
                    <h2>Citizen</h2>
                    <p className='card-pricing'>&#36;3,988</p>
                    <button className='arrivals-btn'>Discover</button>
                  </div>
            </div>
        </section>
    </main>
  )
}

export default Arrivals