import React from 'react';
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import BringYourOwnBusiness from  "./components/BringYourOwnBusiness/BringYourOwnBusiness";
import FlexiblePlataform from "./components/FlexiblePlataform/FlexiblePlataform";
import FollowTwitter from "./components/FollowTwitter/FollowTwitter";
import Footer from "./components/Footer/Footer";

export default () => (
  <div className="App">
    <Hero />
    <Features />
    <BringYourOwnBusiness />
    <FlexiblePlataform />
    <FollowTwitter />
    <Footer />
  </div>
);


