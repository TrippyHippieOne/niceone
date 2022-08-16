import React from "react";
import BlockOne from "../Components/HomePageContent/BlockOne";
import MainVideo from "../Components/HomePageContent/MainVideo";
import Slider from "../Components/Carousel/Slider";
import "../Styles/App.css";

const Home = () => {
    return (
        <>
            <MainVideo />
            <BlockOne />
            <Slider />
        </>
    );
};

export default Home;
