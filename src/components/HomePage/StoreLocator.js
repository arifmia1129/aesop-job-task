import React from 'react';
import { BsArrowRight } from 'react-icons/bs';


const StoreLocator = () => {
    return (
        <div className='lg:flex justify-between my-10'>
            <div className='lg:px-20 px-2 py-2 lg:py-0'>
                <h3 className='text-3xl pb-10'>Store locator</h3>
                <p>Our consultants are available to host you in-store and provide tailored guidance on gift purchases. </p>
                <button className='border flex justify-between w-64 p-3 items-center  border-black mt-10'>
                    <p>Find nearby store</p>
                    <BsArrowRight />
                </button>
            </div>
            <img className='lg:w-[60vw]' src="https://www.aesop.com/u1nb1km7t5q7/DqJCGx3tPeDqODieHw5uA/48f50fbd1758ee27990a600c131bd2ce/Aesop-HK-New-Town-Plaza-Hero-Bleed-Desktop-2880x1620px.jpg" alt="" />
        </div>
    );
};

export default StoreLocator;