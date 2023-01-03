import React from 'react';

const VideoBanner = () => {
    return (
        <div className='lg:flex justify-between'>
            <div className='m-5'>
                <video autoPlay muted loop src="https://videos.ctfassets.net/u1nb1km7t5q7/79BLY6e2HR6KjrOQLpxDIq/3cb1b528d64a3ef51275b6667663c6a9/Aesop_Gift_Kits_2022-23_Web_Homepage_Secondary_Kits_All_1920x1080px.mp4"></video>
                <h3 className='text-lg font-semibold p-2'>The Poetry of Place</h3>
                <p className='p-2'>A new collection of gift kits inspired by Aesop’s heritage of design—drawing on the architecture and neighbourhood atmosphere of four key stores from around the world.</p>
            </div>
            <div className='m-5'>
                <video autoPlay muted loop src="https://videos.ctfassets.net/u1nb1km7t5q7/sk00XEguRtfHl7ae9qOEF/e93f9e416be7c0d58bfbba5469962c5b/Aesop_Gift_Kits_2022-23_Web_Homepage_Secondary_Fragrance_1920x1080px.mp4"></video>
                <h3 className='text-lg font-semibold p-2'>Fragrance</h3>
                <p className='p-2'>Hwyl, Tacit, Marrakech Intense and Rōzu—modern compositions with timeless relevance, ranging from the woody to the floral and equally suited to day and night</p>
            </div>
        </div>
    );
};

export default VideoBanner;