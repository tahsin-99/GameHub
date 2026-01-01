import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router';
import AnimatedTitle from './AnimatedTitle';

const Banner = ({data}) => {
    const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:true,
    autoplay:true,
    autoplaySpeed:2000
  };
    
    return (
        <div className='md:w-[1200px] md:ml-30 p-5 lg:w-[1200px] items-center  mt-20 lg:mx-auto overflow-visible text-white'>
            <AnimatedTitle
            
            text='Most Popular Games'
            className='text-4xl font-bold'
            animationType='slideLeft'
            
            />
                
         
           <div className=' w-full  mt-20'>
            <Slider{...settings} className='mt-6 w-full'>
            {data.map((d)=>(
                <div key={d.id} className=''>
                    <Link to={`/game-details/${d.id}`}>
                    <div >
                    <img className='h-[450px] mx-auto w-[1000px]  rounded-xl' src={d.coverPhoto} alt="" />
                    </div>
                    </Link>
                    
                    <div className='text-center mt-10' >
                       
                       
                    </div>
                </div>
            ))}
            </Slider>
           </div>
        </div>
    );
};

export default Banner;