import React from "react";
import "./header.css";

function Header(){
    return (
        <header>
            <button className="menu">show model</button>
            <nav>
                <ul>
                    <li><a href="#!">About</a></li>
                    <li><a href="#!">Articles</a></li>
                    <li><a href="#!">Projects</a></li>
                    <li><a href="#!">Speaking</a></li>
                    <li><a href="#!">Contant</a></li>
                </ul>
            </nav>



            <div className="fixed">
                <ul className="model">
                    <li><a href="#!">About</a></li>
                    <li><a href="#!">Articles</a></li>
                    <li><a href="#!">Projects</a></li>
                    <li><a href="#!">Speaking</a></li>
                    <li><a href="#!">Contant</a></li>
                </ul>
            </div>
         </header>
    );
}

export default Header;
