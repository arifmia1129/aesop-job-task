import React from 'react';
import GiftFinderBanner from '../../components/HomePage/GiftFinderBanner';
import TopBanner from '../../components/HomePage/TopBanner';
import VideoBanner from '../../components/HomePage/VideoBanner';
import FirstTopTitle from '../../components/Shared/FirstTopTitle';
import Navbar from '../../components/Shared/Navbar';
import SecondTopTitle from '../../components/Shared/SecondTopTitle';

const Home = () => {
    return (
        <div>
            <FirstTopTitle />
            <SecondTopTitle />
            <Navbar />
            <TopBanner />
            <VideoBanner />
            <GiftFinderBanner />
        </div>
    );
};

export default Home;