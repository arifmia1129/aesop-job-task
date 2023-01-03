import React from 'react';

const GiftBanner = () => {
    return (
        <div className='lg:flex justify-between'>
            <div className='m-5'>
                <img src="https://www.aesop.com/u1nb1km7t5q7/2owapxnOEvdwVPJj96guuc/8604a9a53bfe4b5f96cc5b78c0fd3c52/Aesop_Gift_Kits_2022-23_Web_Homepage_Secondary_Gifts_for_Home_Incense_and_Brass_Holder_Desktop_2560x1440px.jpg" alt="" />
                <h3 className='text-lg font-semibold p-2'>Gifts for the home—Incense</h3>
                <p className='p-2'>Slender and delicately fragranced, for striking a note of serenity in the home—or the home-away-from-home.</p>
            </div>
            <div className='m-5'>
                <img src="https://www.aesop.com/u1nb1km7t5q7/73DEmxdUx5skiw707qrY37/e4a927fbf0076dd72df72b2cb4fddbe5/Aesop_Gift_Kits_2022-23_Web_Homepage_Secondary_Skin_Care_Bundles_GL_Desktop_2560x1440px.jpg" alt="" />
                <h3 className='text-lg font-semibold p-2'>Gift Bundles</h3>
                <p className='p-2'>Classic pairings and assortments of a complementary character, informed by the wisdom of our in-store consultants and product experts.</p>
            </div>
        </div>
    );
};

export default GiftBanner;