import React from 'react'
import '../css_files/collection.css';

const Collection = () => {
  return (
<main className='main-collection-sec'>
        <section className='collection-sec'>
            <h2 className='collection-sec-h2'>Collection</h2>
            <div className="grid-card-container">
                <div className="grid-card" data-collection="Rado"></div>
                <div className="grid-card" data-collection="Geneve"></div>
                <div className="grid-card" data-collection="Tissot"></div>
                <div className="grid-card" data-collection="Cartier"></div>
                <div className="grid-card" data-collection="Omega"></div>
                <div className="grid-card" data-collection="Fitron"></div>
            </div>
        </section>
    </main>
  )
}

export default Collection