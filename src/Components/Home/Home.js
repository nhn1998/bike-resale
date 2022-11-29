import React from 'react';
import Catagories from './Catagories/Catagories';
import AnotherHome from './slider/AnotherHome/AnotherHome';
import Slider from './slider/Slider';

const Home = () => {
    return (
        <div className='my-10'>
            <Slider></Slider>
            <Catagories></Catagories>
            <hr />
            <AnotherHome></AnotherHome>
        </div>
    );
};

export default Home;