import React, { useEffect, useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import './Home.css';
import Movies from '../../Components/Movies/Movies';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Movies />
        </div>
    );
};

export default Home;
