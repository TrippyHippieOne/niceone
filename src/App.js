import React from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import AppRouter from "./Components/UI/AppRouter";
import Navbar from "./Components/Navbar/Navbar";
import "./Styles/App.css";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <AppRouter />
            <Footer />
        </BrowserRouter>
    );
}

export default App;
