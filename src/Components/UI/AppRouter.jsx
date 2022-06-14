import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Party from "../Pages/Party";
import About from "../Pages/About";
import Music from "../Pages/Music";
import Contacts from "../Pages/Contacts";
import Error from "../Pages/Error";

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
