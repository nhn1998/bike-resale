import React from 'react';
import img from './background.jpg'
const AnotherHome = () => {
    return (
        <div className='mt-10'>
            <div>
                <h2 className="text-xl text-center text-red-400 mb-4">WE ARE HERE TO HELP YOU <br /> YOU CAN JOIN WITH US</h2>
            </div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${img})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Grow With Us</h1>
                        <p className="mb-5">You Can start Sell Or buy with us.It Can help You to get the best product.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnotherHome;