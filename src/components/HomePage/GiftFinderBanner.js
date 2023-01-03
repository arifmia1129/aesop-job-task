import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

const GiftFinderBanner = () => {
    return (
        <div className='lg:flex justify-between my-10'>
            <video className='lg:w-[50vw]' loop muted autoPlay src="https://www.aesop.com/u1nb1km7t5q7/3H3gi1VVqEIO5FXiJK9uHE/b9587027398dd4edbe29526e5d3fee67/Aesop_Gift_Kits_2022-23_Web_Homepage_Secondary_Gift_Finder_1920x1080px.mp4"></video>

            <div className='lg:px-20 px-2 py-2 lg:py-0'>
                <h3 className='text-3xl pb-10'>The Gift Finder</h3>
                <p>For greater ease of navigation, the Gift Finder provides an opportunity to browse formulations by recipient, function and price.</p>
                <button className='border flex justify-between w-52 p-3 items-center  border-black mt-10'>
                    <p>Discover the gift guide</p>
                    <BsArrowRight />
                </button>
            </div>
        </div>
    );
};

export default GiftFinderBanner;