import React, { useState } from "react";
import "./header.css";

function Header(){
    const [showModel,setShowModel] = useState(false)
    return (
        <header>
            <nav>
                <ul>
                    <li><a href="#!">About</a></li>
                    <li><a href="#!">Articles</a></li>
                    <li><a href="#!">Projects</a></li>
                    <li><a href="#!">Speaking</a></li>
                    <li><a href="#!">Contant</a></li>
                </ul>
            </nav>


            <i onClick={() => setShowModel(true)} className="menu material-icons">menu</i>


            {showModel && (
                <div className="fixed">
                    <ul className="model">
                        <li><i onClick={() => setShowModel(false)} className="material-icons">clear</i></li>
                        <li><a href="#!">About</a></li>
                        <li><a href="#!">Articles</a></li>
                        <li><a href="#!">Projects</a></li>
                        <li><a href="#!">Speaking</a></li>
                        <li><a href="#!">Contant</a></li>
                    </ul>
                </div>
            )}

         </header>
    );
}

export default Header;
