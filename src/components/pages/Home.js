import React, { Component}  from 'react';
import Header from '../ui/Header';
import Footer from '../ui/Footer';
import '../../stylesheets/Home.scss';

const Home = () =>
    <div>
        <Header className="menu container"/>
        <div className="banner">
            <div className="container">
              <h1>Website Template</h1>
              <hr/>
              <p>made for you in React JS</p>
            </div>
        </div>
        <Footer />
    </div>

export default Home;
