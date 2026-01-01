import React from 'react';

import { motion } from "framer-motion";
import Game from './Game';
import AnimatedTitle from './AnimatedTitle';

const Games = ({data}) => {

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                
                staggerChildren: 0.1 
            }
        }
    };
    
    
    return (
         <motion.div className=' sm:w-[1440px] h-full   mx-auto mt-3'
         
         initial='hidden'
         animate='visible'
         variants={containerVariants}
         
         >
            <div className='text-center space-y-5 mt-5   md:w-[1200px] mx-auto'>
                <AnimatedTitle
                text='Trending  Games'
                className='font-bold text-5xl text-white'
                
                />
                    
                
                <motion.p
                
                initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}

                className='text-[#627382] text-[20px] font-normal '>Explore All Trending Games on the Market</motion.p>

            </div>

            
                <motion.div className='grid lg:grid-cols-3 grid-cols-1  mx-auto md:w-[1400px]   p-4  gap-4 '>
                    {
                        data.map((game) => <Game key={game.id} game={game}></Game>)
                    }
                </motion.div>
                
           
        </motion.div>
    );
};

export default Games;