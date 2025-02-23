
import React from 'react'
import '../css_files/product.css';
import Image from 'next/image';

const Product = () => {
  return (
    <main className='main-product-sec'>
        <section className='product-sec'>
         <div className="product-sec-container">
            <div className="product-sec-inner-container">
               <div className='content'>
                <h2 className='product-sec-h2'>Quartz Casio</h2>
                <p className='product-sec-para'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem vel quisquam
                    voluptatum tenetur repellat, ut nihil sit dolor dolore aspernatur eos
                    perferendis? Explicabo, temporibus suscipit?</p>
                    <p className='price'>&#36; 3,899</p>
                    <button className='product-sec-btn'>Order Now</button>
               </div>
               <div className='image-container'>
                <Image src="/images/product-watch.png"  alt='product-image' width={400} height={400} className='product-sec-image'/>
               </div>
            </div>
         </div>
        </section>
    </main>
  )
}

export default Product
