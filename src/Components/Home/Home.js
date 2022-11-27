import React from 'react';
import Catagories from './Catagories/Catagories';
import Slider from './slider/Slider';

const Home = () => {
    return (
        <div className='my-10'>
            <Slider></Slider>
            <Catagories></Catagories>
        </div>
    );
};

export default Home;