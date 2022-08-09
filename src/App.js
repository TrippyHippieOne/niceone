import React from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import AppRouter from "./Routes/AppRouter";
import Navbar from "./Components/Navbar/Navbar";
import "./Styles/App.css";

function App() {
    return (
        <HashRouter>
            <Navbar />
            <AppRouter />
            <Footer />
        </HashRouter>
    );
}

export default App;
