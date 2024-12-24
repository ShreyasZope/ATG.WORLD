import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../sorces/logo.png';
import Post1 from '../sorces/Post1.png';
import Post2 from '../sorces/Post2.png';
import Post3 from '../sorces/Post3.png';
import Post4 from '../sorces/Post4.png';
import { Helmet } from "react-helmet";
import Center_head from '../sorces/Center_head.png';

function Home({ formData }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeSection, setActiveSection] = useState('allPosts'); // Default to 'allPosts'

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const toggleSection = (section) => {
        setActiveSection(section);
    };

    return (
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
                {formData ? (
                    <div className="top-right-container">
                        <p>Welcome {formData.firstName}</p>
                    </div>
                ) : (
                    <div className="top-right-container">
                        <div className='create-user'>
                            <p>Create Account</p>
                            <Link to="/signup">
                                <p className='p1'>It's Free</p>
                            </Link>
                        </div>
                    </div>
                )}
                <div className='top-left-container'>
                    <div className='image'>
                        <img src={logo} alt="Logo" />
                    </div>
                </div>
                <div className='Center_head'>
                    <div className='Tablet_head'>
                        <img src={Center_head} alt="Center_head" />
                    </div>
                    <div className='navigation-menu'>
                        <ul>
                            <li><button onClick={() => toggleSection('allPosts')}>All Posts</button></li>
                            <li><button onClick={() => toggleSection('article')}>Article</button></li>
                            <li><button onClick={() => toggleSection('event')}>Event</button></li>
                            <li><button onClick={() => toggleSection('education')}>Education</button></li>
                            <li><button onClick={() => toggleSection('job')}>Job</button></li>
                        </ul>
                    </div>
                </div>
                <div className='main-content'>
                    {activeSection === 'allPosts' && <div className="collapsible-content">
                        <img src={Post1} alt="Post1" />
                        <img src={Post2} alt="Post2" />
                        <img src={Post3} alt="Post3" />
                        <img src={Post4} alt="Post4" />
                    </div>}
                    {activeSection === 'article' && <div className="collapsible-content">Content for Article</div>}
                    {activeSection === 'event' && <div className="collapsible-content">Content for Event</div>}
                    {activeSection === 'education' && <div className="collapsible-content">Content for Education</div>}
                    {activeSection === 'job' && <div className="collapsible-content">Content for Job</div>}
                </div>
            </div>
        </React.Fragment>
    );
}

export default Home;
