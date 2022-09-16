import React from "react";
import homeLogoImg from "../../../../imgs/europcar-green.ebcf0ee.png"
import egFlag from "../../../../imgs/download.png"
import './Header.css'


export default function Header() {
    return (
        <header className="header">
            <div className="home-logo">
                <a href="/">
                    <img src={homeLogoImg} alt="Logo" />
                </a>
            </div>
            <nav>
                <ul>
                    <li>
                        <button className='btn'>
                            <span className="material-symbols-outlined icon">account_circle</span>
                            <p>Login</p>
                        </button>
                    </li>

                    <li>
                        <button className='btn'>
                            <span>
                                <img className="eg-flag" src={egFlag} alt="Egypt Flag" />
                            </span>
                            <p>Egypt</p>
                        </button>
                    </li>

                    <li>
                        <button className='btn'>
                            <span className="material-symbols-outlined icon" >error</span>
                            <p>Help </p>
                        </button>
                    </li>

                    <li>
                        <button className='btn'>
                            <span className="material-symbols-outlined icon">menu</span>
                            <p>Menu</p>
                        </button>
                    </li>
                </ul>
            </nav>
        </header >
    )
}