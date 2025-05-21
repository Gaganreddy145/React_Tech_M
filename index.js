import React from "react";
import './styles.css';
import { createRoot } from "react-dom/client";
import Head from "./components/Head";
import Body from "./components/Body";
import Footer from "./components/Footer";

const root = document.getElementById("root");
const rootEle = createRoot(root);

const App = () => {
    return <>
        <Head />
        <Body />
        <Footer />
    </>
}

rootEle.render(<App />);