import React from 'react';

const Banner = () => {
    const backgroundImage = {
        backgroundImage: "url('https://specials-images.forbesimg.com/imageserve/61490d9e6d90d55a6d55ed22/header/0x0.gif?fit=scale')",
    }
    return (
        <div class="bg-cover h-96 p-32 align-middle" style={backgroundImage}>
            <h1 className='text-yellow-400 text-5xl font-bold'>Select Your Best Five</h1>
            <p className='text-white text-xl'>Our team is the best team. So, we will be win. We need a best players for our team. Here we found, our best player</p>
        </div>
    );
};

export default Banner;