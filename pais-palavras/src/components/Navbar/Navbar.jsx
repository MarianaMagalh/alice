import { useState } from "react";
import './Navbar.css';
import icon from "../../assets/imgs/logo.png";
import Home from "../../pages/Home/Home";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <header className="alice-header">
                <div className="header-content">
                    <img
                        src={icon}
                        alt="Ícone Gato de Cheshire"
                        className="header-cat-icon"
                    />
                    <nav className="navbar">
                        <ul>
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/sobre">Sobre Nós</Link></li>
                            <li><Link to="/capitulos">Capítulos</Link></li>
                            <li><Link to="/sobre#contato">Contato</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )

}