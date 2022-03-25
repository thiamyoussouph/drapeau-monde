import React from 'react';
import Lago from '../components/Lago';

import Navigation from '../components/Navigation';
import Pays from '../components/Pays';

const Home = () => {
    return (
        <div>
            <Lago/>
            <Navigation />
            <Pays />
        </div>
    );
};

export default Home;