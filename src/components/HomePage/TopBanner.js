import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

const TopBanner = () => {
    return (
        <div className='lg:h-[70vh] lg:flex bg-[#D8C19E]'>
            <div className='lg:flex items-center'>
                <div className='lg:w-[20vw] flex justify-center p-5 lg:p-0'>
                    <h3><span className='text-3xl'>Aesop</span><sub>&reg;</sub></h3>
                </div>
                <div className='lg:w-[30vw] p-5'>
                    <h3 className='text-3xl mb-2'>Down to the wire</h3>
                    <p>From humble gestures to more elaborate offerings, an Aesop gift can still be purchased in time for festive celebrations.</p>
                    <button className='border flex justify-between w-52 p-3 items-center mt-2 border-black'>
                        <p>Discover the gift guide</p>
                        <BsArrowRight />
                    </button>
                </div>
            </div>
            <div>
                <img className='lg:h-[70vh] lg:w-[50vw]' src="https://www.aesop.com/u1nb1km7t5q7/7fn0cC4BJ4X1tiCY4Ge1vw/4837a0e54a23bf7034832301dfd79d6d/Aesop_Gift_Kits_2022-23_Web_Homepage_3_Primary_50-50_Desktop_1440x1500px.jpg" alt="" />
            </div>
        </div>
    );
};

export default TopBanner;