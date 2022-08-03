import React from "react";
import BlockOne from "../BlockOne";
import MainVideo from "../MainVideo";
import Slider from "../NewCarousel/slide";
import "../../Styles/App.css";

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
