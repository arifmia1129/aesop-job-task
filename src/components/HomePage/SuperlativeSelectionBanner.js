import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const SuperlativeSelectionBanner = () => {
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
            className='mb-20'
            swipeable={true}
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
                <img className='h-80 mx-auto' src="https://www.aesop.com/u1nb1km7t5q7/5t6eGPvy9p0faBNNqyL5I2/dffefd6bebae4c131b5072a30915cda8/Aesop_Kits_Gift_Kits_2021-22_Congruous_Web_Medium_1238x752px.png" alt="" />
                <h5 className='text-center font-bold'>Congruous</h5>
                <p className='text-center'>For fragrant, soft skin from neck to toe</p>
            </div>
            <div>
                <img className='h-80 mx-auto' src="https://www.aesop.com/u1nb1km7t5q7/podf7AyFygjtGK9hrXPR7/b1d02ef845d120338b884e148bf93012/Aesop-Body-Geranium-Leaf-Body-Cleanser-100mL-Hybris-Medium-653x752px.png" alt="" />
                <h5 className='text-center font-bold'>Geranium Leaf Body Cleanser</h5>
                <p className='text-center'>A gentle, invigorating gel cleanser</p>
            </div>
            <div>
                <img className='h-80 mx-auto' src="https://images.ctfassets.net/u1nb1km7t5q7/3OFPBQ7L9WuLaQ8vX722I7/1fbb1834e4c80ae36906548992c65203/Aesop_Hair_Conditioner_500mL_Medium_694x860px.png" alt="" />
                <h5 className='text-center font-bold'>Conditioner</h5>
                <p className='text-center'>For soft, nourished hair</p>
            </div>
            <div>
                <img className='h-80 mx-auto' src="https://www.aesop.com/u1nb1km7t5q7/7sBCx1lof4ZVzYCB0pEXiB/758cbc186bb7629a3095278dd563e39c/Aesop_Kits_Gift_Kits_2021-22_Industrious_GL_Web_Medium_1238x752px.png" alt="" />
                <h5 className='text-center font-bold'>Industrious</h5>
                <p className='text-center'>Citrus, woody, herbaceous</p>
            </div>
            <div>
                <img className='h-80 mx-auto' src="https://images.ctfassets.net/u1nb1km7t5q7/56uZaqM8L0CyYnMuk5P7iU/525d619b009cfb999807188ce451dd2f/Aesop_Hair_Shampoo_500mL_Medium_694x860px.png" alt="" />
                <h5 className='text-center font-bold'>Shampoo</h5>
                <p className='text-center'>For soft, shiny, fragrant hair</p>
            </div>

        </Carousel>
    );
};

export default SuperlativeSelectionBanner;