import { useState } from "react";
import { Link } from 'react-router-dom';
import './Navbar.css';
import icon from "../../assets/imgs/logo.png";


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
                    <h1 className="tituloNav">Alice no País das Maravilhas</h1>
                    <nav className="navbar">
                        <ul>
                            <li><Link to="/Home">Home</Link></li>
                            <li><Link to="/Capitulos">Capítulos</Link></li>
                            <li><Link to="/leitura">Ler Livro</Link></li>
                            <li><Link to="/SobreNos">Sobre Nós</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )

}