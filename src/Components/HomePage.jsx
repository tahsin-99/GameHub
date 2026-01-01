import React from 'react';
import Navbar from './Navbar';
import { Outlet, useLoaderData } from 'react-router';
import Footer from './Footer';
import Banner from './Banner';
import Games from './Games';
import Newsletter from './NewsLetter';


const HomePage = () => {
    const {threeGames,allGames} =useLoaderData()
    
    return (
        <div className='flex flex-col min-h-screen bg-linear-to-b from-[#131314]  to-[#090909]'>
            <title>GameHub | Home</title>
           <Navbar></Navbar>
           <main className='flex-1 '>
            <Banner data={threeGames}></Banner>
            
            <Games data={allGames}></Games>
            <Newsletter></Newsletter>
            
           <Outlet></Outlet>
           </main>
           <Footer></Footer>
        </div>
    );
};

export default HomePage;