import React from "react";
import './styles.css';
import { createRoot } from "react-dom/client";

const root = document.getElementById("root");
const rootEle = createRoot(root);

const App = () => {
    return <>
        <Head />
        <Body />
        <Footer />
    </>
}

const Head = () => {
    return <div id="head-container">
        <Logo />
        <NavBar />
    </div>
}

const Logo = () => {
    return <img width="100px" height="100px" src="https://marketplace.canva.com/EAFaFUz4aKo/3/0/1600w/canva-yellow-abstract-cooking-fire-free-logo-tn1zF-_cG9c.jpg"/>
}

const NavBar = () => {
    return <nav>
        <ul id="nav-ul">
            <li>Home</li>
            <li>About us</li>
            <li>Contact</li>
        </ul>
    </nav>
}

const Body = () => {
    return (
    <div>
        <SearchBar />
        <ItemsContainer />
    </div>
    )
}

const SearchBar = () => {
    return (
    <div id="search-container">
        <div>
            <input type="text" />
            <button>Search</button>
        </div>
    </div>
    )
}

const ItemsContainer = () => {
    return <div className="items-container">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
    </div>
}

const Item = () => {
    return <div className="item">
        <img src="https://www.shutterstock.com/image-photo/idli-soft-fluffy-rice-cakes-260nw-2530586499.jpg"/>
        <p>Idli</p>
        <p>Ratings: 4.2</p>
        <p>Price: 250/-</p>
    </div>
}

const Footer = () => {
    return (
        <footer>
            <p>Copyright : Reddy</p>
        </footer>
    )
}

rootEle.render(<App />);