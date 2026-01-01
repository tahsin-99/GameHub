import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router';
import Footer from './Footer';

const About = () => {
    return (
        
     <div className='flex flex-col min-h-screen bg-gray-900 text-white'>
           <title>GameHub | About</title>
          
             <Navbar></Navbar>
           
       
     <main className='flex-1 '>
        <section className="bg-gray-900 text-white py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Image */}
      

        {/* Text */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold text-purple-500">About Us</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Welcome to <span className="text-white font-semibold">GameHub</span> — your ultimate destination for discovering and downloading the best games across all platforms. We are passionate gamers dedicated to providing a fast, secure, and seamless experience for every player.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            Our mission is to bring you high-quality games, curated collections, and reliable downloads, all in one place. Whether you love action, strategy, adventure, or casual games, GameHub is here to elevate your gaming experience.
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>🚀 Fast & Safe Downloads</li>
            <li>🕹️ Curated Game Collections</li>
            <li>🌍 Cross-Platform Access</li>
            <li>💬 Community-Driven Feedback</li>
          </ul>
          <Link to='/' className=" cursor-pointer mt-4 px-6 py-3 bg-purple-500 text-white rounded-lg font-semibold hover:bg-purple-600 transition">
            Explore Games
          </Link>
        </div>
      </div>
    </section>
     </main>
    <Footer></Footer>
     </div>
        
    );
};

export default About;