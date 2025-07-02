'use client';

import { useState } from 'react';
import  { motion } from 'framer-motion';



const slides = [
    {
        image: '/onboardhero.png',
        title: 'Welcome to Campus Mall Africa',  
        subtitle: 'Local solution, Global Ideas',
        description: ' By Africans, For African, In African ',
        
    },
    {
        image: '/slides2.png',
        title: 'Buy What you love from fellow students',  
        subtitle: '',
        description: ' Shop safely, locally and fast. ' ,
    },
    {
        image: '/slide3.png',
        title: 'Buy or Grow you own Store Easily',  
        subtitle: '',
        description: '' 
    },
    {
        image: '/slide4.png',
        title: 'Earn, Explore & Belong',  
        subtitle: '',
        description: ' A student powered ecosystem ',
    },
];


export default function Onboarding() {
    const [index, setIndex] = useState(0);

    const nextSlides = () => {
        if (index < slides.length - 1) {
            setIndex(index + 1);
        } else {
            window.location.href = '/auth'; // Redirect to auth
        }
    };

    return (

        <div className='flex flex-col items-center justify-center h-screen w-full bg-orange-500 from-orange-600 to-orange-700 text-white px-6 text-center'>
            <motion.div 
             key={index}
             initial={{ opacity: 0, x: 100}}
             animate={{ opacity: 1, x: 0}}
             exit={{ opacity: 0, x: -100}}
             transition={{ duration: 0.5}}
             className='w-full max-w-md'>
                {/* Top Image slide */}
                {slides[index].image && (
                    <img 
                     src={slides[index].image}
                     alt={`Slide ${index + 1}`}
                     className='w-full h-52 object-contain mb-6 mx-auto'
                    />
                )}
                <h1 className='text-3xl font-bold mb-4'>
                {slides[index].title}
                </h1>
                <h2 className='text-xl font-semibold mb-2'>
                    {slides[index].subtitle}
                </h2>
                <p className='text-md mb-6'>
                    {slides[index].description}
                </p>
                <button 
                 onClick={nextSlides}
                 className='mt-4 bg-white text-gray-950 px-6 py-4 rounded-full font-semibold hover:bg-blue-200 transition'>
                    {index === slides.length - 1 ? 'Get Started' : 'Next'}
                </button>

            </motion.div>

        </div>

    )
}