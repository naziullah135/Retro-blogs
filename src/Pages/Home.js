import React from 'react';
import Banner from '../Components/Banner/Banner';
import Blogs from '../Components/Blogs/Blogs';
import Navbar from '../Components/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <Blogs />
        </div>
    );
};

export default Home;