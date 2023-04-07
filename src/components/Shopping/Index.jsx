import React, {useEffect, useState} from 'react'
import './shopping.css';
import Header from './Header';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import slider1 from './slider-1.webp';
import slider2 from './slider-2.webp';
import slider3 from './slider-3.webp';


function Index() {
    const [message, setMessage] = useState(true);

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      };

      const changetext = () => {
        setMessage(!message)
      }

      useEffect(() => {
        document.title = 'Renis - Shopping';
      }, []);
    

    return (
        <div className='h-max sm:w-full'>
            <Header />
            <div className='h-72 slider container'>
                <Slider {...settings}>
                    <div>
                        <img src={slider1} alt="" />
                    </div>
                    <div>
                        <img src={slider2} alt="" />
                    </div>
                    <div>
                        <img src={slider3} alt="" />
                    </div>
                </Slider>
            </div>
            <div className='h-60 mt-32 bg-sky-300 bg-blue-radias grid justify-center'>
                <div className='grid items-center content-center'>
                    <h1 className='lg:text-3xl font-bold sm:text-sm'>{ message ? 'Welcome to online shopping': 'Thank You' }</h1>
                    <button className='rounded-full bootstrap-btn sm:text-sm' onClick={changetext}>Click</button>
                </div>
            </div>
            <div className='bg-sky-300 h-60 bg-lightblue-radias grid justify-center'>
                <div className='grid items-center content-center'>123456</div> 
            </div>
            <div className='bg-sky-300 h-60 bg-blue-radias grid justify-center'>
                <div className='grid items-center content-center'>123456</div> 
            </div>
        </div>
    )
}

export default Index

