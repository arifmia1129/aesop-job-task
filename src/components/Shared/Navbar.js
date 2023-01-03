import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { TiThMenuOutline } from 'react-icons/ti';

const Navbar = () => {
    const [itemsIsVisible, setItemsIsVisible] = useState(false);
    return (
        <div className='bg-[#FFFEF2] py-5 px-2'>
            <TiThMenuOutline className='flex lg:hidden' onClick={() => setItemsIsVisible(!itemsIsVisible)} size={25} />
            <div className={`lg:flex justify-between font-semibold ${!itemsIsVisible ? 'hidden' : 'flex'}`}>
                <ul className='lg:flex items-center'>
                    <li className='mx-5'>Skin Care</li>
                    <li className='mx-5'>Body & Hand</li>
                    <li className='mx-5'>Hair</li>
                    <li className='mx-5'>Fragrance</li>
                    <li className='mx-5'>Home</li>
                    <li className='mx-5'>Kits & Travel</li>
                    <li className='mx-5'>Gifts</li>
                    <li className='mx-5'>Read</li>
                    <li className='mx-5'>Stores</li>
                    <li className='mx-5'>
                        <FiSearch />
                    </li>
                </ul>
                <ul className='lg:flex items-center'>
                    <li className='mx-5'>Log in</li>
                    <li className='mx-5'>Cart</li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;