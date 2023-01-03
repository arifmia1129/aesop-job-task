import React from 'react';
import TopBanner from '../../components/HomePage/TopBanner';
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
        </div>
    );
};

export default Home;