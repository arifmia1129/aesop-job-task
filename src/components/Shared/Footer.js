import React from 'react';

const Footer = () => {
    return (
        <div className='bg-black p-10'>
            <div className='md:grid grid-cols-2 lg:grid-cols-4 gap-10'>
                <div>
                    <input type="text" className='w-full bg-black border-white border text-white p-1' placeholder='Email' />
                    <div className='flex items-start mt-2'>
                        <input type="checkbox" name="" id="" />
                        <p className='text-white pl-1'>Subscribe to receive communications from Aesop about our products and services. By subscribing, you confirm you have read and accept our privacy policy </p>
                    </div>
                </div>
                <div className='text-white'>
                    <p className='border-b-2 p-2'>Order and support</p>
                    <ul>
                        <li>Contact us</li>
                        <li>FAQs</li>
                        <li>Shipping</li>
                        <li>Returns</li>
                        <li>Order history</li>
                        <li>Terms and conditions</li>
                    </ul>
                </div>
                <div className='text-white'>
                    <p className='border-b-2 p-2'>Services</p>
                    <ul>
                        <li>Live assistance</li>
                        <li>Corporate gifts</li>
                        <li>Facial appointments</li>
                        <li>Click and Collect</li>
                        <li>Video consultation</li>
                    </ul>
                </div>
                <div className='text-white'>
                    <p className='border-b-2 p-2'>Location preferences</p>
                    <ul>
                        <li>Shipping:</li>
                        <li>Hong Kong SAR, China</li>
                        <br />
                        <li>Language:</li>
                        <li>English</li>
                        <li>繁體中文</li>
                        <li>简体中文</li>
                    </ul>
                </div>
            </div>
            <div className='md:grid grid-cols-2 lg:grid-cols-4 gap-10'>

                <div className='text-white'>
                    <p className='border-b-2 p-2'>Sustainability</p>
                    <p>All Aesop products are vegan, and we do not test our formulations or ingredients on animals. We are Leaping Bunny approved and a Certified B Corporation. Learn more</p>
                </div>
                <div className='text-white'>
                    <p className='border-b-2 p-2'>About</p>
                    <ul>
                        <li>Our story</li>
                        <li>Foundation</li>
                        <li>Careers</li>
                        <li>Privacy policy</li>
                        <li>Accessibility</li>
                        <li>Cookie Policy</li>
                    </ul>
                </div>
                <div className='text-white'>
                    <p className='border-b-2 p-2'>Social media</p>
                    <ul>
                        <li>Instagram </li>
                        <li>Twitter</li>
                        <li>LinkedIn </li>
                        <li>WeChat</li>
                        <li>Weibo</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;