
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../sorces/logo.png';
import { Helmet } from "react-helmet";
import Center_head from '../sorces/Center_head.png';

function Home(){
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return(
        <React.Fragment>
        <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <title>ATG WORLD</title>
        </Helmet>
        <div className='home-page'>
        <div className='search-bar'>
            <input
                type="text"
                placeholder="Search for your favorite groups in ATG"
                value={searchTerm}
                onChange={handleSearchChange}
            />
        </div>
        <div className="top-right-container">
        <div className='create-user'>
            <p>Create Account</p>
            <Link to="/signup">
            <p className='p1'>It's Free</p>
            
            </Link>
        </div>
        </div>
        <div className='top-left-container'>
            <div className='image'>
            <img src={logo} alt="Logo" />
            </div>
        </div>
        <div className='Center_head'>
            <div className='Tablet_head'>
            <img src={Center_head} alt="Center_head" />
            </div>
        </div>
        </div>
        
        </React.Fragment>
    )
}

export default Home;


