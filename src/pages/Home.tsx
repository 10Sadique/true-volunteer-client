import React from 'react';
import Events from '../components/Events';
import Hero from '../components/Hero';

const Home = () => {
    return (
        <div>
            <Hero />
            <div className="mb-24" />
            <Events />
        </div>
    );
};

export default Home;
