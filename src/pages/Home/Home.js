import React from 'react';
import CorporateGiftBanner from '../../components/HomePage/CorporateGiftBanner';
import GiftBanner from '../../components/HomePage/GiftBanner';
import GiftFinderBanner from '../../components/HomePage/GiftFinderBanner';
import ProductsCarousel from '../../components/HomePage/ProductsCarousel';
import StoreLocator from '../../components/HomePage/StoreLocator';
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
            <GiftBanner />
            <CorporateGiftBanner />
            <ProductsCarousel />
            <StoreLocator />
        </div>
    );
};

export default Home;