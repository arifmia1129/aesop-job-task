import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const ProductsCarousel = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <Carousel
            className='my-20'
            swipeable={false}
            draggable={false}
            responsive={responsive}
            infinite={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
        >
            <div>
                <img src="https://www.aesop.com/u1nb1km7t5q7/4hQAXgS0eGue4ds2OyZOIK/5557c667d029da695fd286e5c39f75b1/Aesop-Geranium-Leaf-Duet-with-Product-Large-1584x962px.png" alt="" />
                <h5 className='text-center font-bold'>Geranium Leaf Duet</h5>
                <p className='text-center'>A gentle cleanser and aromatic balm</p>
            </div>
            <div>
                <img src="https://www.aesop.com/u1nb1km7t5q7/330zgF12hYu1EKZcjK3F0O/d8c98669f24dafe06e4809e13ee02214/Aesop-Resurrection-Duet-with-Product-Large-1584x962px.png" alt="" />
                <h5 className='text-center font-bold'>Resurrection Duet</h5>
                <p className='text-center'>Cleeanse and nourish the hands</p>
            </div>
            <div>
                <img src="https://www.aesop.com/u1nb1km7t5q7/3eKBaHwyjHsl5lsVgl7QxR/969eac11f7c1f04a4456027e3b242100/Aesop-Kits-Resurrection-Hand-Purifying-Duet-Hybris-Medium-1238x752px.png" alt="" />
                <h5 className='text-center font-bold'>Resurrection Hand Purifying Duet</h5>
                <p className='text-center'>A citrus, woody, herbaceous due</p>
            </div>
            <div>
                <img className='h-80 w-full' src="https://www.aesop.com/u1nb1km7t5q7/1MjkWocFDe7V8IZqeTclIV/5eada5394a5b2c3b2776720927bf0536/Aesop_Bundle_You_and_Your_Dog_Duo_Hybris_Medium_751x852px.png" alt="" />
                <h5 className='text-center font-bold'>You & Your Dog Due</h5>
                <p className='text-center'>A pair of aromatic gel cleansers</p>
            </div>

        </Carousel>
    );
};

export default ProductsCarousel;