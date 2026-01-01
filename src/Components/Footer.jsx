import React from 'react';
import xImg from '../assets/x.png'
import inImg from '../assets/in.png'
import fImg from '../assets/f.png'
import mImg from '../assets/m.png'

const Footer = () => {
    return (
        <footer className='bg-black lg:w-full md:w-[1400px]  lg:mx-auto border-white md:ml-4 '>
        <div className=' w-full  grid sm:grid-cols-5 grid-cols-1
        h-auto gap-20 items-center p-4 '>
            <div className='text-white'>
        <h2 className='text-2xl font-bold mb-4'>GamesHub</h2>
        <p className='text-gray-400'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div className='space-y-4'>
        <h3 className='font-semibold text-white'>Company</h3>
        <p className='text-gray-500'>About Us</p>
        <p className='text-gray-500'>Our Mission</p>
        <p className='text-gray-500'> Contact Saled </p>
            </div>
            <div className='space-y-4' >
         <h3  className='font-semibold text-white'>Services</h3>
       <p className='text-gray-500'>Products & Services</p>
        <p className='text-gray-500'>Customer Stories</p>
        <p className='text-gray-500'>Download Apps </p>
            </div>
            <div className='space-y-4'>
        <h3  className='font-semibold text-white'>Information</h3>
       <p className='text-gray-500'>Privacy Policy</p>
        <p className='text-gray-500'>Terms & Condition</p>
        <p className='text-gray-500'>Join Us </p>
            </div>
            <div className='space-y-2 text-white'>
            <h3 className='font-semibold text-white'>Social Links</h3>
           <div className='text-gray-500 space-y-2'>
             <img src={xImg} alt="" /><a href="https://x.com/">GamesHub System</a>
            <img src={inImg} alt="" /><a href="https://www.linkedin.com/">GamesHub System</a>
            <img src={fImg} alt="" /><a href="https://www.facebook.com/">GamesHub System</a>
            <img src={mImg} alt="" /><a href="https://mail.google.com/">support@cst.com</a>
           </div>
           
            </div>
                                      
        </div>
        <div >
            <p className=' text-gray-400  text-[16px] text-center mb-8'>
                © 2025 GamesHub All rights reserved.
            </p>
        </div>
        </footer>
        
        
    );
};

export default Footer;