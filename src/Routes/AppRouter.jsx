import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../Pages/About";
import Contacts from "../Pages/Contacts";
import Home from "../Pages/Home";
import Music from "../Pages/Music";
import Party from "../Pages/Party";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/party" element={<Party />} />
            <Route path="/about" element={<About />} />
            <Route path="/music" element={<Music />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/*" element={<Home />} />
        </Routes>
    );
};

export default AppRouter;
