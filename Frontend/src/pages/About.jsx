import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={' US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img}/>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
            <p>At Forver, we believe fashion is more than just clothing — it’s a way of expressing who you are. Our collection is carefully designed to bring you timeless styles, everyday comfort, and the confidence to shine wherever you go. Whether it’s casual wear, chic outfits, or wardrobe essentials, Forver is here to make fashion simple, stylish, and affordable.</p>
            <p>We focus on delivering not just style, but also quality you can trust. Every piece is crafted with attention to detail, blending modern trends with timeless designs to suit every occasion. We are committed to making fashion accessible for everyone, ensuring that you never have to compromise on comfort, confidence, or individuality.</p>
            <b className='text-gray-800'>Our Mission</b>
            <p>Our mission is to make fashion an experience that inspires confidence, celebrates individuality, and stays accessible to everyone. We aim to bridge the gap between style and comfort by offering clothing that not only looks good but also feels good. With a focus on quality, affordability, and inclusivity, we’re here to ensure that every outfit you wear tells your story — one that’s uniquely yours, and forever in style.</p>
        </div>
      </div>

      <div className='text-2xl py-4'>
        <Title text1={'WHY'} text2={' CHOOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
         <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Quality Assurance:</b>
            <p className='text-gray-600'>At Forver, quality is at the heart of everything we create. Each product goes through a careful selection of fabrics, thoughtful design, and strict quality checks to ensure durability, comfort, and style. We believe our customers deserve nothing less than the best, which is why we’re committed to delivering clothing that not only meets but exceeds expectations — making every purchase a long-lasting part of your wardrobe.</p>
         </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Convenience:</b>
            <p className='text-gray-600'>At Forver, we make shopping effortless. From easy navigation and secure payments to fast delivery and hassle-free returns, every step is designed with your comfort in mind. With just a few clicks, you can explore the latest styles, order your favorites, and have them delivered right to your doorstep — because fashion should be as convenient as it is stylish.</p>
         </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Customer Satisfaction:</b>
              <p className='text-gray-600'>At Forver, your satisfaction is our top priority. We’re dedicated to providing exceptional service, from the moment you browse our collection to long after your purchase. Our friendly support team is always ready to assist you with any questions or concerns, ensuring a smooth and enjoyable shopping experience. We value your feedback and continuously strive to exceed your expectations, because at Forver, we believe that happy customers are the heart of our success.</p>
          </div>      
      </div>
        <NewsletterBox />
    </div>
  )
}

export default About