import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

const CorporateGiftBanner = () => {
    return (
        <div className='lg:flex justify-between my-10'>
            <div className='lg:px-20 px-2 py-2 lg:py-0'>
                <small className='font-bold'>Tokens of appreciation</small>
                <h3 className='text-3xl py-10'>Corporate gifts</h3>
                <p>Find a variety of gift-giving options, ideal for honouring treasured colleagues and clients. Trained consultants will be pleased to guide your selections and assist with delivery.</p>
                <button className='border flex justify-between w-[90vw] lg:w-72 p-3 items-center  border-black mt-10'>
                    <p>Learn more about this service</p>
                    <BsArrowRight />
                </button>
            </div>
            <img className='lg:w-[60vw]' src="https://www.aesop.com/u1nb1km7t5q7/6FbqraGc96gts4wqXBENFI/7af21353122e60409a730e81ba9e434a/Aesop_Gift_Kits_2022-23_Web_Homepage_Secondary_Corporate_Gifting_Mid_Desktop_2560x1440px.jpg" alt="" />
        </div>
    );
};

export default CorporateGiftBanner;